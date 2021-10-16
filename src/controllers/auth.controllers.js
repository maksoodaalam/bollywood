const authServices = require('../services/auth.services');
const messages = require('../helper/messages.json');

module.exports = {

  login: async (req, res) => {
    try {
      const result = await authServices.loginService(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  createAccount: async (req, res) => {
    try {
      const result = await authServices.createAccountServices(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  createOtp: async (req, res) => {
    try {
      const result = await authServices.createOtp(req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  verifyOtp: async (req, res) => {
    try {
      const result = await authServices.verifyOtp(req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  updateAccount: async (req, res) => {
    try {
      const result = await authServices.updateAccountService(req.body, req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const result = await authServices.deleteAccount(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  updatePassword: async (req, res) => {
    try {
      const result = await authServices.updatePassword(req.body, req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },
  
  forgotPassword: async (req, res) => {
    try {
      const result = await authServices.forgotPassword(req.body, req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },
  
  updateAccountAdmin: async (req, res) => {
    try {
      const result = await authServices.updateAccountAdmin(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  }

}