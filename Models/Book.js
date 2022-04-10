const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    isbn: String,
    authors: [String],
    description: String,
})

module.exports = mongoose.model('Book',bookSchema);