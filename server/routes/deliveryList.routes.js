const Router = require('express')
const router = new Router()
const DeliveryListController = require('../controller/deliveryList.controller')

router.post('/deliveryList', DeliveryListController.createDeliveryList)
router.get('/deliveryList', DeliveryListController.getDeliveryList)
router.get('/deliveryList/:id', DeliveryListController.getOneDeliveryList)
router.put('/deliveryList/:id', DeliveryListController.updateDeliveryList)
router.delete('/deliveryList/:id', DeliveryListController.deleteDeliveryList)


module.exports = router