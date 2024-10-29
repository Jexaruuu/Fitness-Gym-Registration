const express = require('express');
const router = express.Router();
const { getRegister, addRegister } = require('../controllers/fitnessController');

router.route('/register')
  .get(getRegister)
  .post(addRegister);

module.exports = router;
