var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port_number = (process.env.PORT || 3000);

mongoose.connect('mongodb://admin:blade16@ds059722.mongolab.com:59722/store');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use('/api',require('./routes/api'))



app.listen(port_number);
console.log('API is runnning on port' +port_number);