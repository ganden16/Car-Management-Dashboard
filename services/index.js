const {Car} = require('../models')

const getAllCarsService = async () => {
	try {
		const cars = await Car.findAll({
			order: [
				['updatedAt', 'DESC']
			]
		})
		return cars
	} catch(error) {
		console.log(error)
		return false
	}
}

const getCarService = async (id) => {
	try {
		const car = await Car.findByPk(id)
		return car
	} catch(error) {
		console.log(error)
		return false
	}
}

const addCarService = async (req) => {
	try {
		req.body.image = req.file?.filename ? `./upload/cars/${req.file.filename}` : null
		const car = await Car.create(req.body)
		return car
	} catch(error) {
		console.log(error)
		return false
	}
}

const updateCarService = async (req) => {
	try {
		const id = req.params.id
		const {image} = await Car.findByPk(id)

		req.body.image = req.file?.filename ? `./upload/cars/${req.file.filename}` : image

		await Car.update(req.body, {
			where: {
				id: id
			}
		})
		const car = await getCarService(id)
		return car
	} catch(error) {
		console.log(error)
		return false
	}
}

const destroyCarService = async (id) => {
	try {
		const car = await Car.destroy({
			where: {
				id
			}
		})
		return car
	} catch(error) {
		console.log(error)
		return false
	}
}

module.exports = {getAllCarsService, getCarService, addCarService, updateCarService, destroyCarService}
