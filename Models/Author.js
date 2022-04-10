const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String
})

module.exports = mongoose.model('Author',authorSchema);