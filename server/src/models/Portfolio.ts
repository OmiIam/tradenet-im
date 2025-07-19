import Database from 'better-sqlite3';

export interface Portfolio {
  id: number;
  user_id: number;
  total_balance: number;
  portfolio_value: number;
  total_trades: number;
  win_rate: number;
  created_at: string;
  updated_at: string;
}

export interface PortfolioPosition {
  id: number;
  portfolio_id: number;
  symbol: string;
  quantity: number;
  average_price: number;
  current_price: number;
  position_type: 'long' | 'short';
  created_at: string;
  updated_at: string;
}

export interface CreatePositionData {
  symbol: string;
  quantity: number;
  average_price: number;
  current_price: number;
  position_type: 'long' | 'short';
}

export interface UpdatePortfolioData {
  total_balance?: number;
  portfolio_value?: number;
  total_trades?: number;
  win_rate?: number;
}

export class PortfolioModel {
  private db: Database.Database;

  constructor(database: Database.Database) {
    this.db = database;
  }

  getPortfolioByUserId(userId: number): Portfolio | null {
    const stmt = this.db.prepare('SELECT * FROM portfolios WHERE user_id = ?');
    return stmt.get(userId) as Portfolio | null;
  }

  getPortfolioById(portfolioId: number): Portfolio | null {
    const stmt = this.db.prepare('SELECT * FROM portfolios WHERE id = ?');
    return stmt.get(portfolioId) as Portfolio | null;
  }

  updatePortfolio(userId: number, data: UpdatePortfolioData): Portfolio | null {
    const updateFields: string[] = [];
    const values: any[] = [];

    if (data.total_balance !== undefined) {
      updateFields.push('total_balance = ?');
      values.push(data.total_balance);
    }
    if (data.portfolio_value !== undefined) {
      updateFields.push('portfolio_value = ?');
      values.push(data.portfolio_value);
    }
    if (data.total_trades !== undefined) {
      updateFields.push('total_trades = ?');
      values.push(data.total_trades);
    }
    if (data.win_rate !== undefined) {
      updateFields.push('win_rate = ?');
      values.push(data.win_rate);
    }

    if (updateFields.length === 0) {
      return this.getPortfolioByUserId(userId);
    }

    updateFields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(userId);

    const stmt = this.db.prepare(`
      UPDATE portfolios 
      SET ${updateFields.join(', ')} 
      WHERE user_id = ?
    `);

    stmt.run(...values);
    return this.getPortfolioByUserId(userId);
  }

  adjustBalance(userId: number, amount: number, type: 'add' | 'subtract' | 'set'): Portfolio | null {
    const portfolio = this.getPortfolioByUserId(userId);
    if (!portfolio) return null;

    let newBalance = portfolio.total_balance;
    
    switch (type) {
      case 'add':
        newBalance += amount;
        break;
      case 'subtract':
        newBalance -= amount;
        break;
      case 'set':
        newBalance = amount;
        break;
    }

    // Ensure balance doesn't go negative
    newBalance = Math.max(0, newBalance);

    const stmt = this.db.prepare(`
      UPDATE portfolios 
      SET total_balance = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE user_id = ?
    `);

    stmt.run(newBalance, userId);
    return this.getPortfolioByUserId(userId);
  }

  getPortfolioPositions(portfolioId: number): PortfolioPosition[] {
    const stmt = this.db.prepare(`
      SELECT * FROM portfolio_positions 
      WHERE portfolio_id = ? 
      ORDER BY created_at DESC
    `);
    return stmt.all(portfolioId) as PortfolioPosition[];
  }

  addPosition(portfolioId: number, positionData: CreatePositionData): PortfolioPosition | null {
    const stmt = this.db.prepare(`
      INSERT INTO portfolio_positions (portfolio_id, symbol, quantity, average_price, current_price, position_type)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      portfolioId,
      positionData.symbol,
      positionData.quantity,
      positionData.average_price,
      positionData.current_price,
      positionData.position_type
    );

    const getPositionStmt = this.db.prepare('SELECT * FROM portfolio_positions WHERE id = ?');
    return getPositionStmt.get(result.lastInsertRowid) as PortfolioPosition | null;
  }

  updatePosition(positionId: number, positionData: Partial<CreatePositionData>): PortfolioPosition | null {
    const updateFields: string[] = [];
    const values: any[] = [];

    if (positionData.quantity !== undefined) {
      updateFields.push('quantity = ?');
      values.push(positionData.quantity);
    }
    if (positionData.average_price !== undefined) {
      updateFields.push('average_price = ?');
      values.push(positionData.average_price);
    }
    if (positionData.current_price !== undefined) {
      updateFields.push('current_price = ?');
      values.push(positionData.current_price);
    }

    if (updateFields.length === 0) {
      const getStmt = this.db.prepare('SELECT * FROM portfolio_positions WHERE id = ?');
      return getStmt.get(positionId) as PortfolioPosition | null;
    }

    updateFields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(positionId);

    const stmt = this.db.prepare(`
      UPDATE portfolio_positions 
      SET ${updateFields.join(', ')} 
      WHERE id = ?
    `);

    stmt.run(...values);
    
    const getStmt = this.db.prepare('SELECT * FROM portfolio_positions WHERE id = ?');
    return getStmt.get(positionId) as PortfolioPosition | null;
  }

  deletePosition(positionId: number): boolean {
    const stmt = this.db.prepare('DELETE FROM portfolio_positions WHERE id = ?');
    const result = stmt.run(positionId);
    return result.changes > 0;
  }

  getPortfolioStats(): {
    totalValue: number;
    totalTrades: number;
    avgWinRate: number;
  } {
    const stmt = this.db.prepare(`
      SELECT 
        SUM(portfolio_value) as totalValue,
        SUM(total_trades) as totalTrades,
        AVG(win_rate) as avgWinRate
      FROM portfolios
    `);
    return stmt.get() as {
      totalValue: number;
      totalTrades: number;
      avgWinRate: number;
    };
  }

  getAllPortfolios(limit: number = 50, offset: number = 0): (Portfolio & { user_email: string; user_name: string })[] {
    const stmt = this.db.prepare(`
      SELECT 
        p.*,
        u.email as user_email,
        u.first_name || ' ' || u.last_name as user_name
      FROM portfolios p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.portfolio_value DESC
      LIMIT ? OFFSET ?
    `);
    return stmt.all(limit, offset) as (Portfolio & { user_email: string; user_name: string })[];
  }
}

export default PortfolioModel;