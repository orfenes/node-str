'use strict'

const express    = require('express');
const bodyParser = require ('body-parser'); //tratar as requisiçõe
const mongoose = require('mongoose'); 

const app    = express();
const router = express.Router(); 

// conectando ao banco
mongoose.connect('mongodb://localhost/node-str');

// carrega os models
const Product = require('./models/product');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

 
