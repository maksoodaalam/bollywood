const yup = require('yup');

module.exports = {

  addToCart: yup.object({
    product_id: yup.number().required(),
    product_varient_id: yup.number().required(),
    quantity: yup.number().required(),
    is_deleted: yup.boolean().required()
  }),

  fetchCartItem: yup.object({
    user_id: yup.string().required(),
  }),

  deleteCartItem: yup.object({
    user_id: yup.string().required(),
    product_id: yup.string().required(),
  }),

}