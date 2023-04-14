'use strict';
const fs = require('fs')
const data = fs.readFileSync('./data/cars.min.json', 'utf-8')
const cars = JSON.parse(data)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		let CarSeeder = []
		cars.forEach(car => {
			CarSeeder.push({
				"name": car.name,
				"type": car.type,
				"price": car.price,
				"size": car.size,
				"image": car.image,
				"createdAt": new Date(),
				"updatedAt": new Date()
			})
		});
		await queryInterface.bulkInsert('Cars', CarSeeder)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Cars');
	}
};
