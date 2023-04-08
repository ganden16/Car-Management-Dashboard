const express = require('express')
const api = require('./api.js')
const web = require('./web.js')

const router = express.Router()

router.use("/api/car", api);
router.use("/", web);

router.use('/api/', (req, res) => {
	res.status(404).json({
		status: false,
		message: "endpoint not found !"
	})
})

router.use('/', (req, res) => {
	res.render('404', {
		title: "404 Not Found",
		message: "Mau Kemana Bos",
		layout: "layouts/blank-layout"
	})
})

module.exports = router