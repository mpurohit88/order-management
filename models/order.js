const connection = require('./database.js');

const OrderModel = function (params) {
};
  
OrderModel.prototype.getListOfOrder = function () {
    return new Promise(function (resolve, reject) {

        connection.getConnection((error, connection) => {
            if (error) { throw error; }

            if (!error) {

                connection.query('select DateTime_Created,id,name,total_price,financial_status,fulfillment_status from `order`', (error, rows, fields) => {
                    if (!error) {
                        console.log('result...', rows);
                        resolve(rows);
                    } else {
                        console.log('Error...', error);
                        reject(error);
                    }
                });
            }
        });
    });
}

module.exports = OrderModel;