import express from 'express';
import UserController from '../controllers/user';
import { authenticateToken, requireUser } from '../middleware/auth';
import { validatePagination } from '../middleware/validation';
import { body } from 'express-validator';
import DatabaseManager from '../models/Database';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for user routes
const userLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Transaction rate limiting
const transactionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 transactions per hour
  message: 'Too many transactions, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

export default function createUserRoutes(database: DatabaseManager) {
  const userController = new UserController(database);

  // Apply authentication to all routes
  router.use(authenticateToken);
  router.use(requireUser);
  router.use(userLimiter);

  // Dashboard and Profile
  router.get('/dashboard', async (req, res) => {
    await userController.getDashboardStats(req, res);
  });

  router.get('/profile', async (req, res) => {
    await userController.getProfile(req, res);
  });

  router.put('/profile', [
    body('first_name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('First name must be between 2 and 50 characters'),
    body('last_name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Last name must be between 2 and 50 characters'),
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
  ], async (req, res) => {
    await userController.updateProfile(req, res);
  });

  // Portfolio
  router.get('/portfolio', async (req, res) => {
    await userController.getPortfolio(req, res);
  });

  // Transactions
  router.get('/transactions', validatePagination, async (req, res) => {
    await userController.getTransactions(req, res);
  });

  router.post('/transactions/deposit', transactionLimiter, [
    body('amount')
      .isFloat({ gt: 0 })
      .withMessage('Amount must be greater than 0'),
    body('description')
      .optional()
      .trim()
      .isLength({ max: 255 })
      .withMessage('Description must be less than 255 characters'),
  ], async (req, res) => {
    await userController.createDeposit(req, res);
  });

  router.post('/transactions/withdraw', transactionLimiter, [
    body('amount')
      .isFloat({ gt: 0 })
      .withMessage('Amount must be greater than 0'),
    body('description')
      .optional()
      .trim()
      .isLength({ max: 255 })
      .withMessage('Description must be less than 255 characters'),
  ], async (req, res) => {
    await userController.createWithdrawal(req, res);
  });

  // Market Data
  router.get('/market-data', async (req, res) => {
    await userController.getMarketData(req, res);
  });

  // Account Statistics
  router.get('/stats', async (req, res) => {
    await userController.getAccountStats(req, res);
  });

  return router;
}