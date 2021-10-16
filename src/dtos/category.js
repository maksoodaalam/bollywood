const yup = require('yup');

module.exports = {

  addCategory: yup.object({
    name: yup.string().required(),
    parent_category: yup.number().required().positive().integer(),
    slugs: yup.string(),
    descriptions: yup.string(),
    featured: yup.string(),
    for: yup.string(),
    url: yup.string().url(),
    level: yup.number(),
    createdby: yup.string(),
    is_deleted: yup.boolean().required(),
    status: yup.boolean().required()
  })
  
}