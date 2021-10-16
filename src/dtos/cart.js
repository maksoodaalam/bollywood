const yup = require('yup');

module.exports = {

  addToCart: yup.object({
    user_id: yup.number().required(),
    product_id: yup.number().required(),
    quantity: yup.number().required()
  }),

  fetchCartItem: yup.object({
    user_id: yup.string().required(),
  }),

  deleteCartItem: yup.object({
    user_id: yup.string().required(),
    product_id: yup.string().required(),
  }),

}