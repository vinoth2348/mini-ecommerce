const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

router.route('/orders').get(createOrder);

module.exports = router;