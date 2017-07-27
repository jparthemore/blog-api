/*jshint esversion: 6*/
const mongoose = require('mongoose');
const crypto = require('crypto');
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

userSchema.methods.setPassword = function setPassword(password){
  this.salt = crypto.randomBytes(16).toString('hex'); //sprinkle of randomness
  this.hash = crypto.pbkdf2Sync(password,this.salt,1000, 64, 'sha512')
                    .toString('hex');//passwrd key functin
};
userSchema.methods.isValidPassword = function isValidPassword(password){
  const testHash = crypto.pbkdf2Sync(password,this.salt,1000, 64, 'sha512')
                         .toString('hex');
  return this.hash === testHash; //this refers to doc
};

const User = mongoose.model('User',userSchema); //registering model
module.exports = User; //not only one to accomplish ability to import
