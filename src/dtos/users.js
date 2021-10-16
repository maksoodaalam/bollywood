const yup = require('yup');

module.exports = {

  login: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),

  signup: yup.object({
    name: yup.string().required().min(5).max(30),
    email: yup.string().email().max(50).required(),
    password: yup.string().min(5).max(30).required(),
    contact_number: yup.number().required(),
    status: yup.boolean().required(),
    role: yup.string().min(3).max(30).required(),
  }),

  update: yup.object({
    id: yup.number(),
    name: yup.string().min(5).max(30),
    email: yup.string().email().max(50),
    password: yup.string().min(5).max(30),
    contact_number: yup.number(),
    status: yup.boolean(),
    role: yup.string().min(3).max(30),
  }),

  delete: yup.object({
    id: yup.number(),
    email: yup.string().email().max(50),
    contact_number: yup.number(),
  }),

  createOtp: yup.object({
    contact_number: yup.number().required()
  }),

  verifyOtp: yup.object({
    contact_number: yup.number().required(),
    otp: yup.string().required()
  }),
  
  updatePassword: yup.object({
    user_id: yup.number().required(),
    old_password: yup.string().min(5).max(30).required(),
    password: yup.string().min(5).max(30).required(),
  }),

  forgotPassword: yup.object({
    contact_number: yup.number().required(),
    password: yup.string().min(5).max(30).required(),
  }),
  
}