var express = require('express');
var router = express.Router();


var product = require ('../models/products');

product.methods(['get','put','post','delete',]);

product.register(router,'/products')


module.exports = router;