require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let NODE_PORT = process.env.NODE_PORT

if (PORT === undefined) {
    PORT = 3000
}

if (NODE_PORT === undefined) {
    NODE_PORT = 3003
}

if (process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    MONGODB_URI,
    PORT,
    NODE_PORT
}