const express = require('express');
const masterRouter = express.Router();
const { fetchMasterData, setMasterData } = require('../controllers/master.controllers');

const validateResourceMW = require('../middlewares/users.middlewares');
const validateToken = require('../middlewares/token.middleware');
const masterSchema = require('../dtos/master');

masterRouter.get('/fetch-master-data',
  fetchMasterData);

masterRouter.post('/add-master-data',
  validateResourceMW(masterSchema.addMasterData),
  setMasterData);

module.exports = masterRouter;