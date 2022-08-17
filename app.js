const config = require('./utils/config')
const express = require('express')
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "https: data: blob:"],
        }
    })
)

app.use(express.static(path.join(__dirname, 'client/build')))

const messagesRouter = require('./controllers/messages')

console.log('Connecting to: ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
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

module.exports = app