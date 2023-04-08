const express = require('express')
const router = express.Router()

const {getAllCars, getCar, addCar, editCar, deleteCar} = require('../controller/api')
const uploadFile = require('../middleware/uploadFileMiddleware')


router.get('/', getAllCars)
router.get('/:id', getCar)
router.post('/', uploadFile, addCar)
router.put('/:id', uploadFile, editCar)
router.delete('/:id', deleteCar)

module.exports = router