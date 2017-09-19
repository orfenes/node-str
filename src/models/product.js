'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: [true, 'Titulo obrigatorio'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'O slug é obrigatorio'],
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description é obrigratorio']
  },
  price: {
    type: Number,
    required: [true, 'Preco é obrigatorio']
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  tags: [{
    type: String,
    required: [true, 'Tags sao obrigatorias']
  }],
  image: {
    type: String,
    required: [true, 'Titulo obrigatorio'],
    trim: true
  }
});

module.exports = mongoose.model('Product', schema);