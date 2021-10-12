const yup = require('yup');

module.exports = {

  addAttribute: yup.object({
    attribute: yup.string().required()
  }),

  addVariation: yup.object({
    name: yup.string().required(),
    attribute_id: yup.number().required().positive().integer(),
    createdBy: yup.number().positive().integer(),
    modifiedBy: yup.number().positive().integer(),
    status: yup.boolean(),
    is_deleted: yup.boolean(),
  }),

}