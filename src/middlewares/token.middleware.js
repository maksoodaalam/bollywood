const jwt = require('jsonwebtoken');
const MSG = require('../helper/messages.json');
const authServices = require('../services/auth.services');
const { secretkey } = require('../helper/helper');


const validateToken = () => async (req, res, next) => {
  const resources = req.headers;
  try {
    if (resources) {
      if (resources.token) {
        // next();
        // jwt.verify();
        const secretKey = await secretkey();
        // console.log('will se', secretKey + ' tokne ', resources.token);

        try {

          const verificationResponse = await jwt.verify(resources.token, secretKey);
          // console.log('verificationResponse,', verificationResponse, verificationResponse.id);

          const user = await authServices.findUserById(verificationResponse.id);
          // console.log('user,', user);

          if (user) {
            // console.log('went through all this,', user);
            req.user = user;
            next();
          } else {
            res.status(400).json({
              status: 400,
              success: false,
              result: { data: null },
              msg: MSG.TOKEN_INCORRETCT,
            });
          }


        } catch (error) {
          res.status(400).json({
            status: 400,
            success: false,
            result: { data: null },
            msg: MSG.TOKEN_INCORRETCT,
          });
        }


      } else {
        res.status(400).json({
          status: 400,
          success: false,
          result: { data: null },
          msg: MSG.TOKEN_REQUIRED,
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        success: false,
        result: { data: null },
        msg: MSG.HEADERS_REQUIRED,
      });
    }

  } catch (error) {
    console.error(error);

    res.status(400).json({
      status: 400,
      success: false,
      result: { data: null },
      msg: MSG.TOKEN_INCORRETCT,
    });
  }
};

module.exports = validateToken;