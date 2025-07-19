import { Request, Response } from 'express';
import { UserModel, UpdateUserData } from '../models/User';
import { PortfolioModel, UpdatePortfolioData } from '../models/Portfolio';
import { TransactionModel } from '../models/Transaction';
import DatabaseManager from '../models/Database';

export class AdminController {
  private userModel: UserModel;
  private portfolioModel: PortfolioModel;
  private transactionModel: TransactionModel;

  constructor(database: DatabaseManager) {
    const db = database.getDatabase();
    this.userModel = new UserModel(db);
    this.portfolioModel = new PortfolioModel(db);
    this.transactionModel = new TransactionModel(db);
  }

  // Dashboard Statistics
  async getDashboardStats(req: Request, res: Response): Promise<void> {
    try {
      const userStats = this.userModel.getUserStats();
      const portfolioStats = this.portfolioModel.getPortfolioStats();
      const transactionStats = this.transactionModel.getTransactionStats();

      res.json({
        users: {
          total: userStats.total,
          active: userStats.active,
          suspended: userStats.suspended,
          inactive: userStats.inactive
        },
        portfolio: {
          totalValue: portfolioStats.totalValue || 0,
          totalTrades: portfolioStats.totalTrades || 0,
          averageWinRate: portfolioStats.avgWinRate || 0
        },
        transactions: {
          total: transactionStats.totalTransactions || 0,
          totalVolume: transactionStats.totalVolume || 0,
          todayCount: transactionStats.todayTransactions || 0,
          todayVolume: transactionStats.todayVolume || 0
        }
      });
    } catch (error) {
      console.error('Dashboard stats error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // User Management
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;

      const users = this.userModel.getAllUsers(limit, offset);
      const totalCount = this.userModel.getUsersCount();

      // Remove password hashes from response
      const safeUsers = users.map(({ password_hash, ...user }) => user);

      res.json({
        users: safeUsers,
        pagination: {
          total: totalCount,
          limit,
          offset,
          hasMore: offset + limit < totalCount
        }
      });
    } catch (error) {
      console.error('Get all users error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const user = this.userModel.getUserById(userId);

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // Get user's portfolio
      const portfolio = this.portfolioModel.getPortfolioByUserId(userId);
      
      // Get user's recent transactions
      const transactions = this.transactionModel.getTransactionsByUserId(userId, 10);

      // Remove password hash from response
      const { password_hash, ...safeUser } = user;

      res.json({
        user: safeUser,
        portfolio,
        recentTransactions: transactions
      });
    } catch (error) {
      console.error('Get user by ID error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const updateData: UpdateUserData = req.body;

      const updatedUser = this.userModel.updateUser(userId, updateData);

      if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // Remove password hash from response
      const { password_hash, ...safeUser } = updatedUser;

      res.json({
        message: 'User updated successfully',
        user: safeUser
      });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);

      const success = this.userModel.deleteUser(userId);

      if (!success) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete user error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async toggleUserStatus(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const { status } = req.body;

      const updatedUser = this.userModel.toggleUserStatus(userId, status);

      if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // Remove password hash from response
      const { password_hash, ...safeUser } = updatedUser;

      res.json({
        message: `User ${status === 'active' ? 'activated' : 'suspended'} successfully`,
        user: safeUser
      });
    } catch (error) {
      console.error('Toggle user status error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Balance Management
  async adjustUserBalance(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const { amount, type, description } = req.body;
      const adminId = req.user!.userId;

      // Adjust the balance
      const updatedPortfolio = this.portfolioModel.adjustBalance(userId, amount, type);

      if (!updatedPortfolio) {
        res.status(404).json({ error: 'User portfolio not found' });
        return;
      }

      // Create transaction record
      const transactionAmount = type === 'add' ? amount : type === 'subtract' ? -amount : amount;
      const transaction = this.transactionModel.createTransaction({
        user_id: userId,
        type: 'adjustment',
        amount: transactionAmount,
        description: description || `Balance ${type} by admin`,
        admin_id: adminId
      });

      res.json({
        message: 'Balance adjusted successfully',
        portfolio: updatedPortfolio,
        transaction
      });
    } catch (error) {
      console.error('Adjust balance error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUserTransactions(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;

      const transactions = this.transactionModel.getTransactionsByUserId(userId, limit, offset);
      const totalCount = this.transactionModel.getTransactionCountByUserId(userId);

      res.json({
        transactions,
        pagination: {
          total: totalCount,
          limit,
          offset,
          hasMore: offset + limit < totalCount
        }
      });
    } catch (error) {
      console.error('Get user transactions error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createTransaction(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const { type, amount, description } = req.body;
      const adminId = req.user!.userId;

      const transaction = this.transactionModel.createTransaction({
        user_id: userId,
        type,
        amount,
        description,
        admin_id: adminId
      });

      if (!transaction) {
        res.status(400).json({ error: 'Failed to create transaction' });
        return;
      }

      res.status(201).json({
        message: 'Transaction created successfully',
        transaction
      });
    } catch (error) {
      console.error('Create transaction error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Portfolio Management
  async getUserPortfolio(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const portfolio = this.portfolioModel.getPortfolioByUserId(userId);

      if (!portfolio) {
        res.status(404).json({ error: 'Portfolio not found' });
        return;
      }

      const positions = this.portfolioModel.getPortfolioPositions(portfolio.id);

      res.json({
        portfolio,
        positions
      });
    } catch (error) {
      console.error('Get user portfolio error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateUserPortfolio(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const updateData: UpdatePortfolioData = req.body;

      const updatedPortfolio = this.portfolioModel.updatePortfolio(userId, updateData);

      if (!updatedPortfolio) {
        res.status(404).json({ error: 'Portfolio not found' });
        return;
      }

      res.json({
        message: 'Portfolio updated successfully',
        portfolio: updatedPortfolio
      });
    } catch (error) {
      console.error('Update portfolio error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async addPortfolioPosition(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.userId);
      const positionData = req.body;

      const portfolio = this.portfolioModel.getPortfolioByUserId(userId);
      if (!portfolio) {
        res.status(404).json({ error: 'Portfolio not found' });
        return;
      }

      const position = this.portfolioModel.addPosition(portfolio.id, positionData);

      if (!position) {
        res.status(400).json({ error: 'Failed to add position' });
        return;
      }

      res.status(201).json({
        message: 'Position added successfully',
        position
      });
    } catch (error) {
      console.error('Add position error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // General Admin Operations
  async getAllTransactions(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;

      const transactions = this.transactionModel.getAllTransactions(limit, offset);
      const totalCount = this.transactionModel.getTotalTransactionCount();

      res.json({
        transactions,
        pagination: {
          total: totalCount,
          limit,
          offset,
          hasMore: offset + limit < totalCount
        }
      });
    } catch (error) {
      console.error('Get all transactions error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAllPortfolios(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;

      const portfolios = this.portfolioModel.getAllPortfolios(limit, offset);

      res.json({
        portfolios
      });
    } catch (error) {
      console.error('Get all portfolios error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default AdminController;