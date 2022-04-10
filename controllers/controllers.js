const Book = require('../Models/Book')
const path = require('path')
const Magazine = require('../Models/Magazine')
const fs = require('fs')

const post_book = (req, res) => {
    let newdata = `\n${req.body.title};${req.body.isbn};${req.body.authors};${req.body.description}`;
    let dbdata = {
        title: req.body.title,
        isbn: req.body.isbn,
        authors: req.body.authors.split(','),
        description: req.body.description,
    }

    Book.create(dbdata, (err, nB) => {
        if (!err && nB) {
            fs.appendFile(path.join(__dirname,'../Books.csv'), newdata, (err) => {
                if (!err) {
                    res.sendFile(path.join(__dirname, '../Books.csv'));
                } else {
                    console.log(err)
                    res.json(null);
                }
            })
        } else {
            res.json(null);
        }
    })
}

const post_magazine = (req, res) => {
    let newdata = `\n${req.body.title};${req.body.isbn};${req.body.authors};${req.body.publishedAt}`;
    console.log(newdata);
    let dbdata = {
        title: req.body.title,
        isbn: req.body.isbn,
        authors: req.body.authors.split(','),
        publishedAt: req.body.publishedAt,
    }

    Magazine.create(dbdata, (err, nM) => {
        if (!err && nM) {
            fs.appendFile(path.join(__dirname,'../Magazines.csv'), newdata, (err) => {

                if (!err) {
                    res.sendFile(path.join(__dirname, '../Magazines.csv'));
                } else {
                    console.log(err)
                    res.json(null);
                }
            })
        } else {
            res.json(null);
        }
    })
}

const bm_isbn = (req, res) => {
    Book.findOne({ isbn: req.params.isbn }, (err, fB) => {
        if (!err) {
            if (!fB) {
                Magazine.findOne({ isbn: req.params.isbn }, (err, fM) => {
                    if (!err && fM) res.render('view',{data: fM});
                    else res.json(null);
                })
            } else{
                // res.json(fB);
                res.render('view',{data: fB});
            }
        } else
            res.json(null);
    })
}

const bm =  async (req, res) => {
    try {
        let data = [];
        const books = await Book.find({}).exec()
        const magazines = await Magazine.find({}).exec()

        data = data.concat(books, magazines);
        // res.json(data)
        res.locals.options = true;
        res.render('all-books-mags',{data});
    } catch (err) {
        res.json(null)
    }
}

const bmsort = async (req, res) => {
    try {
        let data = [];
        const books = await Book.find({}).exec()
        const magazines = await Magazine.find({}).exec()

        data = data.concat(books, magazines);

        data.sort((a, b) => {
            if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
            if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
            else return 0;
        })

        // res.json(data)
        res.render('all-books-mags',{data})
    } catch (err) {
        res.json(null)
    }
}

const bma = (req, res) => {
    let data = [];

    Book.find({ authors: { $in: req.params.email } }, (err, fB) => {
        if (!err && fB) {
            data = data.concat(fB)
        }

        Magazine.find({ authors: { $in: req.params.email } }, (err, fM) => {
            if (!err && fM) {
                data = data.concat(fM)
            }

            // res.json(data);
            res.render('all-books-mags',{data})
        })
    })
}


module.exports = {post_book,post_magazine,bm, bmsort, bm_isbn , bma}