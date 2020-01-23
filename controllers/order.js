const Order = require("../models/order.js")

const getListOfOrder = async function () {
	try {
		const listOfOrder = await new Order({}).getListOfOrder();
		
		return listOfOrder;
	}catch (err) {
		console.log(err);
	}
};

const updateStatus = async function (data) {
	try {
		await new Order(data).updateStatus();
        const listOfOrder = await new Order({}).getListOfOrder();

		return listOfOrder;
	}catch (err) {
		console.log(err);
	}
};

module.exports = { getListOfOrder: getListOfOrder, updateStatus: updateStatus};