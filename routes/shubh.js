const express = require('express');

const router = express.Router();

const shubhController = require('../controllers/shubh_controller');
router.get('/about', shubhController.love);


module.exports = router;