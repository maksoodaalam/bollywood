const express = require('express');
const cartRouter = express.Router();
const { addToCart, fetchCartItem, deleteCartItem } = require('../controllers/cart.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const paramsValidations = require('../middlewares/users.middlewares.params');
const validateToken = require('../middlewares/token.middleware');
const cartSchema = require('../dtos/cart');

cartRouter.post('/update-cart',
  validateResourceMW(cartSchema.addToCart),
  validateToken(),
  addToCart);

cartRouter.get('/fetch-cart-item',
  validateToken(),
  fetchCartItem);

cartRouter.delete('/delete-cart-item',
  validateResourceMW(cartSchema.deleteCartItem),
  deleteCartItem);

module.exports = cartRouter;