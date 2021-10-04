const auth = require('./routes/auth.routes');
const cart = require('./routes/cart.routes');
const category = require('./routes/category.routes');


const routes = [
  ['/api/v1/auth', auth],
  ['/api/v1/cart', cart],
  ['/api/v1/category', category],
];


module.exports = routes;