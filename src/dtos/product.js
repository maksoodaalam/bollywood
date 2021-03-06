const yup = require('yup');

module.exports = {

  addProduct: yup.object({
    productname: yup.string().required().max(100).min(3),
    productslug: yup.string().required().max(100).min(3),
    gstslap: yup.string().max(100).min(3),
    discounttype: yup.string(),
    discount: yup.string(),
    productstatus: yup.string().required(),
    productfor: yup.string().required(),
    attributename: yup.object(),
    producttype: yup.string().required(),
    featuredimg: yup.string().required(),
    gallary: yup.number(),
    categoryId: yup.array().of(yup.number().positive()).required(),
    createdby: yup.string(),
    modifiedby: yup.string(),
  }),

  getProductById: yup.object({
    id: yup.number().required().positive(),
  }),

  addProductDetails: yup.object({
    product_id: yup.number().required().positive(),
  }),

}