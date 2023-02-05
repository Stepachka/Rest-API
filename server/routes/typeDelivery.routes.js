const Router = require('express')
const router = new Router()
const TypeDeliveryController = require('../controller/typeDelivery.controller')

router.post('/typeDelivery', TypeDeliveryController.createTypeDelivery)
router.get('/typeDelivery', TypeDeliveryController.getTypeDelivery)
router.delete('/typeDelivery/:id', TypeDeliveryController.deleteTypeDelivery)


module.exports = router