const express = require('express');
const cartRouter = express.Router();
const { addProduct, getProduct, getProductById } = require('../controllers/product.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const paramsValidations = require('../middlewares/users.middlewares.params');
const validateToken = require('../middlewares/token.middleware');
const productSchema = require('../dtos/product');

cartRouter.post('/add-product',
  validateResourceMW(productSchema.addProduct),
  addProduct);

cartRouter.get('/get-products',
  getProduct);

cartRouter.get('/get-products-by-id',
  paramsValidations(productSchema.getProductById),
  getProductById);

module.exports = cartRouter;