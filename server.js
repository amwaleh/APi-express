var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:blade16@ds059722.mongolab.com:59722/store');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use('/api',require('./routes/api'))

app.get('/', function (req,res){
	res.send('working');
});

app.listen(3000);
console.log('API is runnning on port 3000')