'use strict'

const express    = require('express');
const bodyParser = require ('body-parser'); //tratar as requisiçõe

const app    = express();
const router = express.Router(); 

// Caarrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

 
