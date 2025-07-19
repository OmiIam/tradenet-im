import { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
    return;
  }
  next();
};

// Authentication validation rules
export const validateRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  body('first_name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('last_name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('Role must be either user or admin'),
  handleValidationErrors
];

export const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .isLength({ min: 1 })
    .withMessage('Password is required'),
  handleValidationErrors
];

// User management validation rules
export const validateUserId = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  handleValidationErrors
];

export const validateUserUpdate = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
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
  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('Role must be either user or admin'),
  body('status')
    .optional()
    .isIn(['active', 'suspended', 'inactive'])
    .withMessage('Status must be active, suspended, or inactive'),
  handleValidationErrors
];

export const validateUserStatus = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('status')
    .isIn(['active', 'suspended'])
    .withMessage('Status must be active or suspended'),
  handleValidationErrors
];

// Portfolio validation rules
export const validateBalanceAdjustment = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('amount')
    .isFloat({ min: 0 })
    .withMessage('Amount must be a positive number'),
  body('type')
    .isIn(['add', 'subtract', 'set'])
    .withMessage('Type must be add, subtract, or set'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('Description must be less than 255 characters'),
  handleValidationErrors
];

export const validatePortfolioUpdate = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('total_balance')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Total balance must be a positive number'),
  body('portfolio_value')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Portfolio value must be a positive number'),
  body('total_trades')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Total trades must be a positive integer'),
  body('win_rate')
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage('Win rate must be between 0 and 100'),
  handleValidationErrors
];

export const validatePositionCreate = [
  param('userId')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('symbol')
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage('Symbol must be between 1 and 20 characters'),
  body('quantity')
    .isFloat({ gt: 0 })
    .withMessage('Quantity must be greater than 0'),
  body('average_price')
    .isFloat({ gt: 0 })
    .withMessage('Average price must be greater than 0'),
  body('current_price')
    .isFloat({ gt: 0 })
    .withMessage('Current price must be greater than 0'),
  body('position_type')
    .isIn(['long', 'short'])
    .withMessage('Position type must be long or short'),
  handleValidationErrors
];

// Transaction validation rules
export const validateTransactionCreate = [
  body('user_id')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  body('type')
    .isIn(['deposit', 'withdrawal', 'trade', 'adjustment'])
    .withMessage('Type must be deposit, withdrawal, trade, or adjustment'),
  body('amount')
    .isFloat()
    .withMessage('Amount must be a number'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('Description must be less than 255 characters'),
  handleValidationErrors
];

// Query validation rules
export const validatePagination = [
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  query('offset')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Offset must be non-negative'),
  handleValidationErrors
];

export const validateDateRange = [
  query('startDate')
    .optional()
    .isISO8601()
    .withMessage('Start date must be a valid ISO 8601 date'),
  query('endDate')
    .optional()
    .isISO8601()
    .withMessage('End date must be a valid ISO 8601 date'),
  handleValidationErrors
];

export default {
  handleValidationErrors,
  validateRegistration,
  validateLogin,
  validateUserId,
  validateUserUpdate,
  validateUserStatus,
  validateBalanceAdjustment,
  validatePortfolioUpdate,
  validatePositionCreate,
  validateTransactionCreate,
  validatePagination,
  validateDateRange
};