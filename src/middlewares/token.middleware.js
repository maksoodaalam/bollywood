const jwt = require('jsonwebtoken');
const validateToken = () => async (req, res, next) => {
  // console.log('resourcesresourcesresources', req.headers);
  const resources = req.headers;
  // next();
  try {
    let errorMsg;
    // await resourceSchema.validate(resource);
    if (resources) {
      if (resources.token) {
        next();
        // jwt.verify();
      } else {
        res.status(400).json({
          status: 200,
          success: false,
          result: { data: null },
          msg: "You must have to pass token in headers",
        });
      }
    } else {
      res.status(400).json({
        status: 200,
        success: false,
        result: { data: null },
        msg: "You must have to pass headers",
      });
    }

  } catch (error) {
    console.error(error);

    res.status(400).json({
      status: 200,
      success: false,
      result: { data: null },
      msg: e.errors.join(', '),
    });
  }
};

module.exports = validateToken;