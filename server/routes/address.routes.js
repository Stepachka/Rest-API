const Router = require('express')
const router = new Router()
const addressController = require('../controller/address.controller')

router.post('/address', addressController.createAddress)
router.get('/address', addressController.getAddress)
router.get('/address/:id', addressController.getOneAddress)
router.put('/address/:id', addressController.updateAddress)
router.delete('/address/:id', addressController.deleteAddress)


module.exports = router