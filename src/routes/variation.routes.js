const express = require('express');
const cartRouter = express.Router();
const { addAttribute, getAllAttribute, addVariation, getVariationWithAttribute } = require('../controllers/variation.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const paramsValidations = require('../middlewares/users.middlewares.params');
const validateToken = require('../middlewares/token.middleware');
const variationSchema = require('../dtos/variation');

cartRouter.post('/add-attribute',
  validateResourceMW(variationSchema.addAttribute),
  addAttribute);

cartRouter.get('/get-all-attribute',
  getAllAttribute);

cartRouter.post('/add-variation',
  validateResourceMW(variationSchema.addVariation),
  addVariation);

cartRouter.get('/get-variation-with-attribute',
getVariationWithAttribute);

module.exports = cartRouter;