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
    return await jwt.sign(data, tokenSecret, "Stack", {
      expiresIn: "10h"
    });
  },

  ////razorpay
  payment: async () => {
    var instance = new Razorpay({
      key_id: 'rzp_live_0l2o9KiXR006OG',
      key_secret: 'oelFelNKDimaF7xCVq4vyGGh',
    })
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

  vicidialApi: async (path) => {
    let ip = await publicIp.v4();
    ip = '78.138.98.114';
    const url = 'http://' + ip + '/vicidial/non_agent_api.php?' + path;
    const res = axios(url, {
      method: 'GET',
      headers: {

      }
    });
    const apiResult = await res;
    return apiResult['data'];
  },

  vicidialCustomQuery: async (query, callback) => {
    const connection = mysql.createConnection({ host: '78.138.98.114', user: 'cron', password: '1234', database: 'asterisk' });
    connection.query(query, function (err, result, fields) {
      callback(null, result);
    });
  },

  makeDb: () => {
    const connection = mysql.createConnection({ host: '78.138.98.114', user: 'cron', password: '1234', database: 'asterisk' });
    return {
      query(sql, args) {
        return util.promisify(connection.query)
          .call(connection, sql, args);
      },
      close() {
        return util.promisify(connection.end).call(connection);
      }
    }
  },

  generateRandomNumber: async (tableName, col_name, length) => {
    const genNumber = Math.floor(Math.random() * (9 * length)) + length;
    const genNumberExists = await tableName.count({ [col_name]: genNumber });
    if (genNumberExists) {
      generateRandomNumber(tableName, col_name, length);
    } else {
      return genNumber;
    }
  },

  calls: async (url) => {
    let ip = await publicIp.v4();
    ip = 'king.dial12.com';
    const res = axios(url, {
      method: 'GET',
      headers: {

      }
    });
    const apiResult = await res;
    return apiResult['data'];
  },

  callsPost: async (url, data) => {
    let ip = await publicIp.v4();
    ip = 'king.dial12.com';
    const res = axios(url, {
      method: 'GET',
      //responseType: 'stream',
    });
    const apiResult = await res;
    return apiResult['data'];
  }

}