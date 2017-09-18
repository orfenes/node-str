'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
  let res = await Product.find({});
  return res;
}

exports.create = async(data) =>{
  let customer = new Customer(data);
  await customer.save();
}