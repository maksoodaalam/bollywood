const express = require('express');
const authRouter = express.Router();
const { createAccount, login, updateAccount, updatePassword, updateAccountAdmin, forgotPassword, deleteAccount, verifyOtp, createOtp, masterData } = require('../controllers/auth.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const validateToken = require('../middlewares/token.middleware');
const userSchema = require('../dtos/users');

authRouter.post('/create-account',
  validateResourceMW(userSchema.signup),
  createAccount);

authRouter.post('/create-otp',
  validateResourceMW(userSchema.createOtp),
  createOtp);

authRouter.post('/verify-otp',
  validateResourceMW(userSchema.verifyOtp),
  verifyOtp);

authRouter.post('/login',
  validateResourceMW(userSchema.login),
  validateToken(),
  login);

authRouter.put('/update-admin',
  validateResourceMW(userSchema.update),
  updateAccountAdmin);

authRouter.put('/update',
  validateResourceMW(userSchema.update),
  updateAccount);

authRouter.put('/update-password',
  validateResourceMW(userSchema.updatePassword),
  updatePassword);

authRouter.post('/forgot-password',
  validateResourceMW(userSchema.forgotPassword),
  forgotPassword);

authRouter.delete('/delete',
  validateResourceMW(userSchema.delete),
  deleteAccount);

module.exports = authRouter;