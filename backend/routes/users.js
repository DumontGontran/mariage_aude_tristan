const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');
const bodyValidation = require('../middleware/bodyValidation');
const schema = require('../schemas/users');

router.post('/register', bodyValidation(schema.register), usersCtrl.registerUser);
router.post('/login', bodyValidation(schema.login), usersCtrl.loginUser);

module.exports = router;