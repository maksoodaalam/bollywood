const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const publicIp = require('public-ip');
const axios = require('axios');
const mysql = require('mysql2');
const util = require('util');
const Pagination = require('../helper/Pagination');
const saltRound = 10;
const tokenSecret = 'secret123';
//const Razorpay = require('razorpay');

module.exports = {
  generatePasswordHash: async (password = '') => {
    return await bcrypt.hash(password, +saltRound);
  },

  generateToken: async (data) => {
    return await jwt.sign(data, tokenSecret);
  },

  ////razorpay
  payment: async () => {
    var instance = new Razorpay({
      key_id: 'rzp_live_0l2o9KiXR006OG',
      key_secret: 'oelFelNKDimaF7xCVq4vyGGh',
    })
  },

  secretkey: () => {
    return tokenSecret;
  },

  createPaginationData: (totalRecords, page, size) => {

    if (totalRecords !== 0 && page !== 0 && size !== 0) {

      const currentPage = (totalRecords > 0) ? page : null;
      const totalPage = Math.ceil(totalRecords / size);
      if (currentPage <= totalPage) {
        return new Pagination({
          currentPage: (totalRecords > 0) ? page : null,
          nextPage: ((totalRecords - (size * page)) > 0) ? (page + 1) : null,
          prevPage: (page - 1 > 0) ? (page - 1) : null,
          totalPage: Math.ceil(totalRecords / size),
          size,
        });
      }

    }
    return {};
  },

  generateRandomNumber: async (tableName, col_name, length) => {
    const genNumber = Math.floor(Math.random() * (9 * length)) + length;
    const genNumberExists = await tableName.count({ [col_name]: genNumber });
    if (genNumberExists) {
      generateRandomNumber(tableName, col_name, length);
    } else {
      return genNumber;
    }
  }
}