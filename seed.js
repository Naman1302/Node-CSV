const Author = require("./Models/Author");
const Magazine = require("./Models/Magazine");
const Book = require("./Models/Book");
const fs = require("fs");
const csv = require("csv-parser");

const seed = async () => {
  try {
    await Author.collection.drop();
    await Magazine.collection.drop();
    await Book.collection.drop();

    fs.createReadStream("Authors.csv")
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        let t = data.email.substring(0, 5);
        if (t == "null-") {
          data.email.split("-").pop();
        }
        Author.insertMany(data, (err, nD) => {
          if (!err && nD) {
            // console.log(nD);
          }
        });
      });

    fs.createReadStream("Books.csv")
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        data.authors = data.authors.split(",");
        Book.insertMany(data, (err, nD) => {
          if (!err && nD) {
            // console.log(nD);
          }
        });
      });

    fs.createReadStream("Magazines.csv")
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        data.authors = data.authors.split(",");
        Magazine.insertMany(data, (err, nD) => {
          if (!err && nD) {
            // console.log(nD);
          }
        });
      });
  } catch (err) {
    console.error(err);
  }
};

module.exports = seed;
