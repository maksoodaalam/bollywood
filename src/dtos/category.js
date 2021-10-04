const yup = require('yup');

module.exports = {

  addCategory: yup.object({
    name: yup.string().required(),
    parent_category: yup.number()
  })
  
}