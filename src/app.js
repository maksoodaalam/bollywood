const auth = require('./routes/auth.routes');
const cart = require('./routes/cart.routes');
const category = require('./routes/category.routes');
const product = require('./routes/product.routes');
const master = require('./routes/master.routes');


const routes = [
  ['/api/v1/auth', auth],
  ['/api/v1/cart', cart],
  ['/api/v1/category', category],
  ['/api/v1/product', product],
  ['/api/v1/master', master]
];


module.exports = routes;