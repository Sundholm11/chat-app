require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (PORT === undefined) {
    PORT = 3003
}

if (process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    MONGODB_URI,
    PORT
}