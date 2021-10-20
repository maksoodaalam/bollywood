const express = require('express');
const categoryRouter = express.Router();
const { addCategory, fetchCategory, getProduct } = require('../controllers/category.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const paramsValidations = require('../middlewares/users.middlewares.params');
const validateToken = require('../middlewares/token.middleware');
const categorySchema = require('../dtos/category');

categoryRouter.post('/add-category',
  validateResourceMW(categorySchema.addCategory),
  addCategory);

categoryRouter.get('/fetch-all-category',
  fetchCategory);

module.exports = categoryRouter;