const messagesRouter = require('express').Router()
const Message = require('../models/message')

messagesRouter.get('/', async (request, response) => {
    const messages = await Message.find({})

    console.log("Messages retrieved, total amount of messages: ", messages.length)

    response.json(messages.map(m => m.toJSON()))
})

messagesRouter.post('/', async (request, response) => {
    const body = request.body

    try {
        const message = new Message({
            id: body.id,
            message: body.message,
            timeStamp: body.timeStamp,
            user: body.user || 'Anonymous',
            userImage: body.userImage || ''
        })

        const savedMessage = await message.save()

        response.json(savedMessage.toJSON())
    } catch (exception) {
        console.log("Exception occured: ", exception)
    }
})

messagesRouter.delete('/', async (request, response) => {
    try {
        await Message.deleteMany({})
        
        response.status(204).end()
    } catch (exception) {
        console.log("Exception occured: ", exception)
    }
})

module.exports = messagesRouter