import Database from 'better-sqlite3';

export interface Transaction {
  id: number;
  user_id: number;
  type: 'deposit' | 'withdrawal' | 'trade' | 'adjustment';
  amount: number;
  description: string | null;
  admin_id: number | null;
  created_at: string;
}

export interface CreateTransactionData {
  user_id: number;
  type: 'deposit' | 'withdrawal' | 'trade' | 'adjustment';
  amount: number;
  description?: string;
  admin_id?: number;
}

export class TransactionModel {
  private db: Database.Database;

  constructor(database: Database.Database) {
    this.db = database;
  }

  createTransaction(data: CreateTransactionData): Transaction | null {
    const stmt = this.db.prepare(`
      INSERT INTO transactions (user_id, type, amount, description, admin_id)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      data.user_id,
      data.type,
      data.amount,
      data.description || null,
      data.admin_id || null
    );

    return this.getTransactionById(result.lastInsertRowid as number);
  }

  getTransactionById(id: number): Transaction | null {
    const stmt = this.db.prepare('SELECT * FROM transactions WHERE id = ?');
    return stmt.get(id) as Transaction | null;
  }

  getTransactionsByUserId(userId: number, limit: number = 50, offset: number = 0): Transaction[] {
    const stmt = this.db.prepare(`
      SELECT * FROM transactions 
      WHERE user_id = ? 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?
    `);
    return stmt.all(userId, limit, offset) as Transaction[];
  }

  getAllTransactions(limit: number = 50, offset: number = 0): (Transaction & { user_email: string; admin_email?: string })[] {
    const stmt = this.db.prepare(`
      SELECT 
        t.*,
        u.email as user_email,
        a.email as admin_email
      FROM transactions t
      JOIN users u ON t.user_id = u.id
      LEFT JOIN users a ON t.admin_id = a.id
      ORDER BY t.created_at DESC
      LIMIT ? OFFSET ?
    `);
    return stmt.all(limit, offset) as (Transaction & { user_email: string; admin_email?: string })[];
  }

  getTransactionStats(): {
    totalTransactions: number;
    totalVolume: number;
    todayTransactions: number;
    todayVolume: number;
  } {
    const stmt = this.db.prepare(`
      SELECT 
        COUNT(*) as totalTransactions,
        SUM(ABS(amount)) as totalVolume,
        SUM(CASE WHEN DATE(created_at) = DATE('now') THEN 1 ELSE 0 END) as todayTransactions,
        SUM(CASE WHEN DATE(created_at) = DATE('now') THEN ABS(amount) ELSE 0 END) as todayVolume
      FROM transactions
    `);
    return stmt.get() as {
      totalTransactions: number;
      totalVolume: number;
      todayTransactions: number;
      todayVolume: number;
    };
  }

  getTransactionsByType(type: 'deposit' | 'withdrawal' | 'trade' | 'adjustment', limit: number = 50): Transaction[] {
    const stmt = this.db.prepare(`
      SELECT * FROM transactions 
      WHERE type = ? 
      ORDER BY created_at DESC 
      LIMIT ?
    `);
    return stmt.all(type, limit) as Transaction[];
  }

  getTransactionsByDateRange(startDate: string, endDate: string, userId?: number): Transaction[] {
    if (userId) {
      const stmt = this.db.prepare(`
        SELECT * FROM transactions 
        WHERE user_id = ? AND created_at BETWEEN ? AND ?
        ORDER BY created_at DESC
      `);
      return stmt.all(userId, startDate, endDate) as Transaction[];
    } else {
      const stmt = this.db.prepare(`
        SELECT * FROM transactions 
        WHERE created_at BETWEEN ? AND ?
        ORDER BY created_at DESC
      `);
      return stmt.all(startDate, endDate) as Transaction[];
    }
  }

  deleteTransaction(id: number): boolean {
    const stmt = this.db.prepare('DELETE FROM transactions WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }

  // Admin specific methods
  createAdminAdjustment(userId: number, amount: number, description: string, adminId: number): Transaction | null {
    return this.createTransaction({
      user_id: userId,
      type: 'adjustment',
      amount,
      description,
      admin_id: adminId
    });
  }

  getAdminTransactions(adminId: number, limit: number = 50, offset: number = 0): Transaction[] {
    const stmt = this.db.prepare(`
      SELECT * FROM transactions 
      WHERE admin_id = ? 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?
    `);
    return stmt.all(adminId, limit, offset) as Transaction[];
  }

  getTransactionCountByUserId(userId: number): number {
    const stmt = this.db.prepare('SELECT COUNT(*) as count FROM transactions WHERE user_id = ?');
    const result = stmt.get(userId) as { count: number };
    return result.count;
  }

  getTotalTransactionCount(): number {
    const stmt = this.db.prepare('SELECT COUNT(*) as count FROM transactions');
    const result = stmt.get() as { count: number };
    return result.count;
  }
}

export default TransactionModel;