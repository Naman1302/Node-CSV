require ('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const seed = require('./seed')
const {post_book, post_magazine, bm, bmsort, bm_isbn, bma} = require('./controllers/controllers')


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('database connected');
    // remove seed when done loading once
    seed();
}).catch(err => console.error(err));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


// routes

// get main page
app.get('/', (req, res) => {
    res.render('main');
})

// form to add new book or a magazine
app.get('/add', (req, res) => {
    res.render('book-form')
})

// post new book and export csv
app.post('/book', post_book)

// post new magazines and export csv
app.post('/magazine', post_magazine)

// get book or magazine with isbn
app.get('/bmi/:isbn', bm_isbn)

// get all magazines and books with details
app.get('/bm', bm)

// get all magazines and books with details sorted by title
app.get('/bmsort', bmsort)

// get all magazines and books with a specific author
app.get('/bma/:email', bma)

app.get("*", (req, res) => { res.redirect('/') })

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})