'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name obrigatorio']
  },
  email: {
    type: String,
    required: [true, 'O e-mail é obrigatorio']
  },
  password: {
    type: String,
    required: [true, 'Password é obrigratorio']
  },
  roles:[{
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user'
  }]
});

module.exports = mongoose.model('Customer', schema);