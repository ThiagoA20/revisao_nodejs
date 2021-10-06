const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init', controller.initDatabase);
router.get('/', controller.getSubscribers);
router.post('/subscribe', 
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(), 
    controller.addSubscriber    
);

module.exports = router;