const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const router = require('./routes/index.js')
const dotenv = require('dotenv')
dotenv.config({path: './.env'});
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', './layouts/main-layouts')

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist/css'))
app.use(express.static('node_modules/bootstrap/dist/js'))

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.use(router)

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})

