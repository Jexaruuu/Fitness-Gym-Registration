const express = require('express');
const router = express.Router();
const registerController = require('../controllers/fitnessController'); 


router.get('/register', registerController.getRegister); 
router.post('/register', registerController.addRegister); 

module.exports = router; 
    