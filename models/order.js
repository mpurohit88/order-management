const connection = require('./database.js');

const OrderModel = function (params) {
    this.id = params.id;
    this.status = params.status;
};
  
OrderModel.prototype.getListOfOrder = function () {
    return new Promise(function (resolve, reject) {

        connection.getConnection((error, connection) => {
            if (error) { throw error; }

            if (!error) {

                connection.query('select DateTime_Created,id,name,total_price,financial_status,fulfillment_status from `order` where financial_status=\'paid\' order by DateTime_Created', (error, rows, fields) => {
                    if (!error) {
                        resolve(rows);
                    } else {
                        reject(error);
                    }

                    connection.release();
                });
            }
        });
    });
}

OrderModel.prototype.updateStatus = function () {
    const that = this;

    return new Promise(function (resolve, reject) {

        connection.getConnection((error, connection) => {
            if (error) { throw error; }

            if (!error) {

                const values = [that.status, that.id];

                connection.query('update `order` set fulfillment_status = ? where id = ?', values, (error, rows, fields) => {
                    if (!error) {
                        console.log('result...', rows);
                        resolve(rows);
                    } else {
                        console.log('Error...', error);
                        reject(error);
                    }

                    connection.release();
                });
            }
        });
    });
}

module.exports = OrderModel;