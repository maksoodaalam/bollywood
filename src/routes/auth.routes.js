const express = require('express');
const authRouter = express.Router();
const { createAccount, login, updateAccount, updatePassword, updateAccountAdmin, forgotPassword, deleteAccount, verifyOtp, createOtp } = require('../controllers/auth.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const validateToken = require('../middlewares/token.middleware');
const userSchema = require('../dtos/users');

authRouter.post('/create-account',
  validateResourceMW(userSchema.signup),
  createAccount);

authRouter.post('/create-otp',
  validateToken(),
  createOtp);

authRouter.post('/verify-otp',
  validateToken(),
  verifyOtp);

authRouter.post('/login',
  validateResourceMW(userSchema.login),
  login);

authRouter.put('/update-admin',
  validateResourceMW(userSchema.update),
  updateAccountAdmin);

authRouter.put('/update',
  validateResourceMW(userSchema.update),
  validateToken(),
  updateAccount);

authRouter.put('/update-password',
  validateResourceMW(userSchema.updatePassword),
  validateToken(),
  updatePassword);

authRouter.post('/forgot-password',
  validateResourceMW(userSchema.forgotPassword),
  validateToken(),
  forgotPassword);

authRouter.delete('/delete',
  validateResourceMW(userSchema.delete),
  deleteAccount);

module.exports = authRouter;