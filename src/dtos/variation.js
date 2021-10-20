const yup = require('yup');

module.exports = {

  addAttribute: yup.object({
    attribute: yup.string().required()
  }),

  addVariation: yup.object({
    name: yup.string().required(),
    attribute_id: yup.number().required().positive(),
    createdBy: yup.number().positive(),
    modifiedBy: yup.number().positive(),
    status: yup.boolean(),
    is_deleted: yup.boolean(),
  }),

}