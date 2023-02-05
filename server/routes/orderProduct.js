const Router = require('express')
const router = new Router()
const orderProductController = require('../controller/orderProduct.controller')

router.post('/orderProduct', orderProductController.createOrderProduct)
router.get('/orderProduct', orderProductController.getOrderProduct)
router.get('/orderProduct/:id', orderProductController.getOneOrderProduct)
router.put('/orderProduct/:id', orderProductController.updateOrderProduct)
router.delete('/orderProduct/:id', orderProductController.deleteOrderProduct)


module.exports = router