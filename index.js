const cors = require('cors');
const path = require('path');
const rootPath = path.normalize(__dirname);

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.static(path.join(rootPath, "public")));

const PORT =  process.env.PORT || 3006;

const Order = require('./controllers/order.js');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get(`/api/getListOfOrder`, async (request, response) => {
    const listOfOrder = await Order.getListOfOrder();
    response.send(listOfOrder);
  });

  app.post(`/api/updateStatus`, async (request, response) => {
    const listOfOrder = await Order.updateStatus(request.body.data);
    response.send(listOfOrder);
  });

  app.get(`/*`, async (request, response) => {
    const route = path.join(__dirname, '..', 'public', 'index.html');
    response.sendFile(route);
  });

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));