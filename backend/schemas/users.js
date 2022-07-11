const yup = require('yup');

module.exports = {
    register: yup.object({
        lastname: yup.string().required(),
        firstname: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required(),
        confirm_password: yup.string().min(8).max(16).required()
    }),

    login: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required()
    }),
};