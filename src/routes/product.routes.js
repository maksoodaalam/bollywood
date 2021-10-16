const express = require('express');
const cartRouter = express.Router();
const { addProduct, getProduct, getProductById, addProductDetail,
   getProductByCatagoryId, getProductByPriceRange } = require('../controllers/product.controllers');

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

cartRouter.post('/add-product-details',
  // paramsValidations(productSchema.addProductDetails),
  addProductDetail);

  cartRouter.get('/filter-by-catagory',
  // paramsValidations(productSchema.getProductByCatagoryId),
  getProductByCatagoryId);

  cartRouter.get('/filter-by-price',
  // paramsValidations(productSchema.getProductByCatagoryId),
  getProductByPriceRange);

module.exports = cartRouter;