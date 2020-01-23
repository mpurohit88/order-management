const express = require('express')
const Order = require('../controllers/order.js');

const orderRouter = express.Router();

orderRouter.route("/getListOfOrder").get(Order.getListOfOrder);

module.exports = orderRouter;