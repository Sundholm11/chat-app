const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const socketIo = require('socket.io')

const server = http.createServer(app)

const io = socketIo(server)

io.on("connection", socket => {
	console.log("New client connected")

	io.emit("clientCount", io.eio.clientsCount)

	socket.on("message", newMessage => {
		console.log("Message received: ", newMessage)
		io.send(newMessage)
		console.log("Message sent")
		io.emit("clientCount", io.eio.clientsCount)
	})
	
	socket.on("disconnect", () => {
		console.log("Client has disconnected")
		io.emit("clientCount", io.eio.clientsCount - 1)
	})
})

server.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`)
})