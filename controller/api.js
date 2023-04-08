const {
	getAllCarsService,
	getCarService,
	addCarService,
	updateCarService,
	destroyCarService
} = require('../services')


const getAllCars = async (req, res) => {
	let cars = await getAllCarsService()
	const {search, size} = req.query
	if(size) {
		cars = cars.filter(car => car.size == size)
	}
	if(search) {
		cars = cars.filter(car => car.name.toLowerCase() == search.toLowerCase() || car.type.toLowerCase() == search.toLowerCase() || car.transmission.toLowerCase() == search.toLowerCase() || car.size.toLowerCase() == search.toLowerCase() || car.price <= search)
	}
	if(cars) {
		res.status(200).json({
			status: true,
			message: "data rental mobil binar",
			total: cars.length,
			data: cars
		})
	} else {
		res.status(400).json({
			status: false,
			message: "terjadi kesalahan permintaan, data mobil tidak ditemukan",
			data: {}
		})
	}
}
const getCar = async (req, res) => {
	const car = await getCarService(req.params.id)
	if(car) {
		res.status(200).json({
			status: true,
			message: "data mobil ditemukan",
			data: car
		})
	} else {
		res.status(400).json({
			status: false,
			message: "terjadi kesalahan permintaan, data mobil tidak ditemukan",
			data: {}
		})
	}
}
const addCar = async (req, res) => {
	const car = await addCarService(req)
	if(car) {
		res.status(201).json({
			status: true,
			message: "data mobil berhasil ditambahkan",
			data: car
		})
	} else {
		res.status(400).json({
			status: false,
			message: "terjadi kesalahan permintaan, data gagal ditambahkan",
			data: {}
		})
	}
}
const editCar = async (req, res) => {
	const car = await updateCarService(req)
	if(car) {
		res.status(201).json({
			status: true,
			message: "data mobil berhasil diupdate",
			data: car
		})
	} else {
		res.status(400).json({
			status: false,
			message: "terjadi kesalahan permintaan, data gagal diupdate",
		})
	}
}
const deleteCar = async (req, res) => {
	const car = await destroyCarService(req.params.id)
	if(car) {
		res.status(200).json({
			status: true,
			message: "data mobil berhasil dihapus",
			data: car
		})
	} else {
		res.status(400).json({
			status: false,
			message: "terjadi kesalahan permintaan, data gagal dihapus",
			data: {}
		})
	}
}


module.exports = {getAllCars, getCar, addCar, editCar, deleteCar}