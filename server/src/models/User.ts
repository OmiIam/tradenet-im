import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  role: 'user' | 'admin';
  status: 'active' | 'suspended' | 'inactive';
  created_at: string;
  updated_at: string;
  last_login: string | null;
}

export interface CreateUserData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role?: 'user' | 'admin';
}

export interface UpdateUserData {
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: 'user' | 'admin';
  status?: 'active' | 'suspended' | 'inactive';
}

export class UserModel {
  private db: Database.Database;

  constructor(database: Database.Database) {
    this.db = database;
  }

  async createUser(userData: CreateUserData): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const stmt = this.db.prepare(`
      INSERT INTO users (email, password_hash, first_name, last_name, role)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      userData.email,
      hashedPassword,
      userData.first_name,
      userData.last_name,
      userData.role || 'user'
    );

    // Create a portfolio for the new user
    const portfolioStmt = this.db.prepare(`
      INSERT INTO portfolios (user_id, total_balance, portfolio_value)
      VALUES (?, ?, ?)
    `);
    
    portfolioStmt.run(result.lastInsertRowid, 10000, 10000); // Default starting balance

    return this.getUserById(result.lastInsertRowid as number)!;
  }

  getUserById(id: number): User | null {
    const stmt = this.db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id) as User | null;
  }

  getUserByEmail(email: string): User | null {
    const stmt = this.db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email) as User | null;
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.password_hash);
  }

  updateLastLogin(userId: number): void {
    const stmt = this.db.prepare('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?');
    stmt.run(userId);
  }

  getAllUsers(limit: number = 50, offset: number = 0): User[] {
    const stmt = this.db.prepare(`
      SELECT * FROM users 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?
    `);
    return stmt.all(limit, offset) as User[];
  }

  getUsersCount(): number {
    const stmt = this.db.prepare('SELECT COUNT(*) as count FROM users');
    const result = stmt.get() as { count: number };
    return result.count;
  }

  updateUser(userId: number, userData: UpdateUserData): User | null {
    const updateFields: string[] = [];
    const values: any[] = [];

    if (userData.email) {
      updateFields.push('email = ?');
      values.push(userData.email);
    }
    if (userData.first_name) {
      updateFields.push('first_name = ?');
      values.push(userData.first_name);
    }
    if (userData.last_name) {
      updateFields.push('last_name = ?');
      values.push(userData.last_name);
    }
    if (userData.role) {
      updateFields.push('role = ?');
      values.push(userData.role);
    }
    if (userData.status) {
      updateFields.push('status = ?');
      values.push(userData.status);
    }

    if (updateFields.length === 0) {
      return this.getUserById(userId);
    }

    updateFields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(userId);

    const stmt = this.db.prepare(`
      UPDATE users 
      SET ${updateFields.join(', ')} 
      WHERE id = ?
    `);

    stmt.run(...values);
    return this.getUserById(userId);
  }

  deleteUser(userId: number): boolean {
    const stmt = this.db.prepare('DELETE FROM users WHERE id = ?');
    const result = stmt.run(userId);
    return result.changes > 0;
  }

  toggleUserStatus(userId: number, status: 'active' | 'suspended'): User | null {
    const stmt = this.db.prepare('UPDATE users SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
    stmt.run(status, userId);
    return this.getUserById(userId);
  }

  getUserStats(): { total: number; active: number; suspended: number; inactive: number } {
    const stmt = this.db.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active,
        SUM(CASE WHEN status = 'suspended' THEN 1 ELSE 0 END) as suspended,
        SUM(CASE WHEN status = 'inactive' THEN 1 ELSE 0 END) as inactive
      FROM users
    `);
    return stmt.get() as { total: number; active: number; suspended: number; inactive: number };
  }
}

export default UserModel;