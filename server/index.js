const expess = require('express')
const cors = require('cors')
const addressRouter = require('./routes/address.routes')
const methodPaymentRouter = require('./routes/methodPayment.routes')
const productsRouter = require('./routes/products.routes')
const statusOrderRouter = require('./routes/statusOrder.routes')
const typeDeliveryRouter = require('./routes/typeDelivery.routes')
const customerRouter = require('./routes/customer.routes')
const courierRouter = require('./routes/courier.routes')
const orderRouter = require('./routes/order.routes')
const orderProductRouter = require('./routes/orderProduct')
const deliveryListRouter = require('./routes/deliveryList.routes')
const PORT = process.env.PORT || 8080
const app = expess()

app.use(cors());
app.use(expess.json())
app.use('/api', addressRouter, methodPaymentRouter,
                productsRouter, statusOrderRouter,
                typeDeliveryRouter, customerRouter,
                courierRouter, orderRouter,
                orderProductRouter, deliveryListRouter)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//res.setHeader('Access-Control-Allow-Credentials', true);
//next();
})
app.listen(PORT, () => console.log(`server ${PORT}`))