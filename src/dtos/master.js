const yup = require('yup');

module.exports = {

  addMasterData: yup.object({
    key: yup.string().required().max(100).min(3),
    json: yup.array().required(),
    is_deleted: yup.boolean().required()
  }),

}