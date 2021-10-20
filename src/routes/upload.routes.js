const express = require('express');
const uploadRouter = express.Router();
const { uploadSingle } = require('../controllers/upload.controllers');
const Helper = require('../helper/helper');
const fs = require('fs-extra');
const multer = require('multer');
const MSG = require('../helper/messages.json');
const ResponseData = require('../helper/responseData');
const pathGlobal = require('path');

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

uploadRouter.post('/upload-single', [

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

          res.json(new ResponseData({
            status: 400,
            success: false,
            result: { data: null },
            msg: MSG.RENAME_FILE_ERROR,
          }));

        }
        else {
          console.log('File Renamed');


          const oldPath = newName;
          const newPath = `../uploads/${name}`;
          fs.move(oldPath, newPath, function (error) {
            if (error) {
              console.error('error in moving file', error);


              res.json(new ResponseData({
                status: 400,
                success: false,
                result: { data: null },
                msg: MSG.MOVE_ERROR,
              }));

            } else {
              console.error('moved success');


              const dirName = pathGlobal.basename(process.cwd());
              var ip = req.connection.remoteAddress;
              if (ip.substr(0, 7) == "::ffff:") {
                ip = ip.substr(7)
              }
              const url = `https://${ip}/${dirName}/uploads/${name}`;


              res.json(new ResponseData({
                status: 200,
                success: true,
                result: { data: url },
                msg: MSG.UPLOAD_FILE_SUCCESS,
              }));
            }
          });


        }
      });
    } catch (error) {
      console.log('something went wrong while uploading file ', error);

      res.json(new ResponseData({
        status: 400,
        success: false,
        result: { data: null },
        msg: MSG.UPLOAD_FILE_ERROR,
      }));

    }
  }
]);

module.exports = uploadRouter;