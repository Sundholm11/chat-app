const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    timeStamp: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    userImage: {
        type: String
    }
})

messageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Message', messageSchema, 'messages')