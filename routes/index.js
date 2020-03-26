const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log("Router Loaded Successfully");
router.get('/', homeController.home);

router.use('/users', require('./users'));
router.use('/shubh', require('./shubh'));

//For any further routes, access from here 
// router.use('/routerName', require('./routerFile'))
module.exports = router;
