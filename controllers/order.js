const Order = require("../models/order.js")

const getListOfOrder = async function (req, res, next) {
	try {
		const listOfOrder = await new Order({}).getListOfOrder();
		
		return listOfOrder;
	}catch (err) {
		console.log(err);
	}
};

module.exports = { getListOfOrder: getListOfOrder};