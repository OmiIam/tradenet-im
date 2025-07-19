import express from 'express';
import AdminController from '../controllers/admin';
import { authenticateToken, requireAdmin } from '../middleware/auth';
import {
  validateUserId,
  validateUserUpdate,
  validateUserStatus,
  validateBalanceAdjustment,
  validatePortfolioUpdate,
  validatePositionCreate,
  validateTransactionCreate,
  validatePagination
} from '../middleware/validation';
import DatabaseManager from '../models/Database';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for admin routes
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many admin requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

export default function createAdminRoutes(database: DatabaseManager) {
  const adminController = new AdminController(database);

  // Apply authentication and admin role check to all routes
  router.use(authenticateToken);
  router.use(requireAdmin);
  router.use(adminLimiter);

  // Dashboard and Statistics
  router.get('/stats', async (req, res) => {
    await adminController.getDashboardStats(req, res);
  });

  // User Management
  router.get('/users', validatePagination, async (req, res) => {
    await adminController.getAllUsers(req, res);
  });

  router.get('/users/:userId', validateUserId, async (req, res) => {
    await adminController.getUserById(req, res);
  });

  router.put('/users/:userId', validateUserUpdate, async (req, res) => {
    await adminController.updateUser(req, res);
  });

  router.delete('/users/:userId', validateUserId, async (req, res) => {
    await adminController.deleteUser(req, res);
  });

  router.put('/users/:userId/status', validateUserStatus, async (req, res) => {
    await adminController.toggleUserStatus(req, res);
  });

  // Balance Management
  router.post('/users/:userId/balance', validateBalanceAdjustment, async (req, res) => {
    await adminController.adjustUserBalance(req, res);
  });

  router.get('/users/:userId/transactions', validateUserId, validatePagination, async (req, res) => {
    await adminController.getUserTransactions(req, res);
  });

  router.post('/users/:userId/transactions', validateTransactionCreate, async (req, res) => {
    await adminController.createTransaction(req, res);
  });

  // Portfolio Management
  router.get('/users/:userId/portfolio', validateUserId, async (req, res) => {
    await adminController.getUserPortfolio(req, res);
  });

  router.put('/users/:userId/portfolio', validatePortfolioUpdate, async (req, res) => {
    await adminController.updateUserPortfolio(req, res);
  });

  router.post('/users/:userId/portfolio/positions', validatePositionCreate, async (req, res) => {
    await adminController.addPortfolioPosition(req, res);
  });

  // Global Data Access
  router.get('/transactions', validatePagination, async (req, res) => {
    await adminController.getAllTransactions(req, res);
  });

  router.get('/portfolios', validatePagination, async (req, res) => {
    await adminController.getAllPortfolios(req, res);
  });

  return router;
}