/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new  Schema({
  email: {
    required: true,
    type: String,
    unique: true
  },
  salt: {
    type: String
  },
  hash: {
    type: String
  }
});//blueprint of how you're building things

const User = mongoose.model('User',userSchema); //registering model
module.exports = User; //not only one to accomplish ability to import
