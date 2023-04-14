const express = require('express')
const router = express.Router()

const uploadFile = require('../middleware/uploadFileMiddleware')
const {index, addPage, editPage, addCar, editCar, deleteCar} = require('../controller/web')

router.get('/', index)
router.get('/add', addPage)
router.get('/edit/:id', editPage)
router.post('/add', uploadFile, addCar)
router.put('/edit/:id', uploadFile, editCar)
router.delete('/delete/:id', deleteCar)


module.exports = router