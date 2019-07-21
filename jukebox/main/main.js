const express = require('express')
const klaw = require('klaw');
var path = require('path');
var router = express.Router();
const app = express();
app.set('view engine', 'ejs');
 
var items = [];
var name = 'ghj';

var directoryToExplore = "./audio";

klaw(directoryToExplore)
    .on('data', function (item) {
        items.push(item.path)
    })
    .on('end', function () {
        console.log(items);
    })
    .on('error', function (err, item) {
        console.log(err.message)
        console.log(item.path) // the file the error occurred on
    });
    
app.get('/', function (req, res) {
    res.render(__dirname + "/circular-wave", {items:items});
    app.use(express.static(__dirname));
    app.use(express.static(__dirname));
  
    
})
app.get('/sunburst', function (req, res) {
    res.render(__dirname + "/sunburst", {items:items});
    app.use(express.static(__dirname));
    app.use(express.static(__dirname));
  
    
})
 
app.listen(3000)



// an array to store the folder and files inside

   