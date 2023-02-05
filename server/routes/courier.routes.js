const Router = require('express')
const router = new Router()
const courierController = require('../controller/courier.controller')

router.post('/courier', courierController.createCourier)
router.get('/courier', courierController.getCourier)
router.get('/courierInProcessing', courierController.getCourierInProcessing)
router.get('/courier/:id', courierController.getOneCourier)
router.put('/courier/:id', courierController.updateCourier)
router.delete('/courier/:id', courierController.deleteCourier)


module.exports = router