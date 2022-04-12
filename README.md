# Node-CSV

<br />

<div align="center">

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://node-csv-to-ui.herokuapp.com/)
<br />

</div>

> The Node CSV is an application which reads data from csv files and update it on database and shows it to a simplified UI representation of data. You also can add data to the exsting or can seach for data.

> The source code is open so that you can download the source code and set it up with ease if you would like to have your own exclusive Varient.

## Folder Structure

    .
    ├── controllers                  # All Api process documented here
    ├── Models                       # Mongoose Model files in here
    ├── views                        # UI for represantion of data
    ├── .gitignore                  
    ├── app.js                       # Node JS, MongoDB and Express JS server file 
    ├── Authors.csv
    ├── Books.csv
    ├── Magazines.csv
    ├── package.lock.json
    ├── package.json                 # Contains all the info about version of dependencies
    ├── Procfile                     # Heroku Config. File
    ├── seed.js                      # To seed in data
    └── README.md

## What (Node-CSV) ?

The concept behind this app was to represent CSV file information through a nodeJS server to the web end as Tabular data.

## Why (Node-CSV) ?

- The app's representaion web interface helps you to visualize file of CSV format in Tabular Form.
- You can use source code for your own projects.

#### Built With

- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [csv-parser](https://www.npmjs.com/package/csv-parser)

#### Clone Project

```shell
git clone https://github.com/Naman1302/Node-CSV.git
```

This Command will copy a full project to your local environment

## Node Server

### Setting up Node Server

```shell
cd Node-csv-main
npm i
```

`cd Node-csv-main` Move into Project Folder
`npm i` install all dependency.

### Run Node Project

Run `node ppp.js` to start node server

## REST API

### API Reference

- PC - Personal Computer
- thismypc.com:5000 - This is Thismypc web site API url. You can use your own localhost server link instead default Link.
- ":userID" - User ID
- ":computerKey" - Computer Key

### Web API

| Web API                         | URL                                        | Description |
| ------------------------------- | ------------------------------------------ | ----------- |
| Main page                       | /                                          | -           |
| Show all Books and Magazines    | /bm                                        | -           |
| Add Book or Magazine            | /add                                       | -           |
| Post new Book and download csv  | /book                                      | -           |
| Post new Mag. and download csv  | /magazine                                  | -           |
| Search by Book's ISBN           | /bmi/:isbn                                 | -           |
| Search by Authors's mail        | /bma/:email                                | -           |
| Sort all books and Mag.         | /bmsort                                    | -           |

## Database

MongoDB use as Database.

## Licensing

The MIT License 2019 Supun Lakmal
