const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const publicIp = require('public-ip');
const axios = require('axios');
const mysql = require('mysql2');
const util = require('util');
const Pagination = require('../helper/Pagination');
const saltRound = 10;
const tokenSecret = 'secret123';
const fs = require('fs-extra');
const multer = require('multer');
//const Razorpay = require('razorpay');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `../bridge`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    let file_name = file.originalname;
    file_name = file_name.replace(/\s/g, "-");
    cb(null, file.fieldname + '-' + file_name);
  }
});

const upload = multer({ storage });

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
  },

  uploadSingle: async (req, res, next) => {

    upload.single("image"),
      function (req, res, next) {
        try {
          const image = req.file.originalname;
          const oldName = `../bridge/image-${image}`;
          const extension = image.split('.').pop();
          const name = `${Date.now()}.${extension}`;
          const newName = `../bridge/${name}`;
          fs.rename(oldName, newName, (error) => {
            if (error) {
              console.log('something went wrong while changing filename', error);

              return new ResponseData({
                status: 400,
                success: false,
                result: { data: null },
                msg: MSG.RENAME_FILE_ERROR,
              });

            }
            else {
              console.log('File Renamed');


              const oldPath = newName;
              const newPath = `../uploads/${name}`;
              fs.move(oldPath, newPath, function (error) {
                if (error) {
                  console.error('error in moving file', error);


                  return new ResponseData({
                    status: 400,
                    success: false,
                    result: { data: null },
                    msg: MSG.MOVE_ERROR,
                  });

                } else {
                  console.error('moved success');
                }
              });


            }
          });
          next();
        } catch (error) {
          console.log('something went wrong while uploading file ', error);

          return new ResponseData({
            status: 400,
            success: false,
            result: { data: null },
            msg: MSG.UPLOAD_FILE_ERROR,
          });

        }
      }

  }
}