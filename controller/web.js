const {
	getAllCarsService,
	getCarService,
	addCarService,
	updateCarService,
	destroyCarService
} = require('../services')

const {capitalize} = require('lodash')

let parsingData = {
	notif: null,
	msg: null
}

const index = async (req, res) => {
	let cars = await getAllCarsService()
	let {size, search} = req.query
	let notif = parsingData.notif
	let msg = parsingData.msg
	let title = "List All Car"

	if(size) {
		cars = cars.filter(car => car.size == size)
		title = `List ${capitalize(size)} Cars`
	}
	if(search) {
		cars = cars.filter(car => car.name.toLowerCase() == search.toLowerCase() || car.type.toLowerCase() == search.toLowerCase() || car.transmission.toLowerCase() == search.toLowerCase() || car.size.toLowerCase() == search.toLowerCase() || car.price <= search)
		title = `List Search Cars`
		cars
	}
	res.render('index', {
		title, notif, msg, size, cars
	})

	parsingData = {}
}
const addPage = (req, res) => {
	res.render('add', {
		title: "Add New Car"
	})
}
const editPage = async (req, res) => {
	const id = req.params.id
	const car = await getCarService(id)
	res.render('edit', {
		title: "Edit Car",
		car
	})
}
const addCar = async (req, res) => {
	const statusAddCar = await addCarService(req)
	parsingData.notif = 'save'
	if(statusAddCar) {
		res.status(201)
		parsingData.msg = 'Data Berhasil Disimpan'
		res.redirect('/')
	} else {
		res.status(500)
		parsingData.msg = 'Data Gagal Disimpan'
		res.redirect('/')
	}
}

const editCar = async (req, res) => {
	const statusEditCar = await updateCarService(req)
	parsingData.notif = 'save'
	if(statusEditCar) {
		res.status(200)
		parsingData.msg = 'Data Berhasil Disimpan'
		res.redirect('/')
	} else {
		res.status(500)
		parsingData.msg = 'Data Gagal Disimpan'
		res.redirect('/')
	}
}

const deleteCar = async (req, res) => {
	const statusDelete = await destroyCarService(req.params.id)
	parsingData.notif = 'delete'
	if(statusDelete) {
		res.status(204)
		parsingData.msg = 'Data Berhasil Dihapus'
		res.redirect('/')
	} else {
		res.status(409)
		parsingData.msg = 'Data Gagal Dihapus'
		res.redirect('/')
	}
}

module.exports = {index, addPage, editPage, addCar, editCar, deleteCar}