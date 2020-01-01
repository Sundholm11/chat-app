const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')))

const messagesRouter = require('./controllers/messages')

console.log('Connecting to: ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch((error) => {
		console.log('Error connecting to MongoDB: ', error.message)
	})

app.use(cors())
app.use(bodyParser.json())

if(process.env.NODE_ENV !== 'test') {
	console.log("Initializing morgan logger")
	morgan.token('post', (req) => {
		return JSON.stringify(req.body)
	})
	app.use(morgan(':method :url :status :res[content-length] :response-time ms :post'))
}

app.use('/api/messages', messagesRouter)

/** TODO: 
 * Add tokenExtractor
 * if using cypress - add testing router
 * add middleware errorhandler?
 */

module.exports = app