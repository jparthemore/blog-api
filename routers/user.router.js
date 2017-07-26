/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users',(req, res)=>{
  res.send('getting all dem users!!');
});
router.get('/users/:userId',(req,res)=>{
  res.send('getting that one special someone!');
});
router.post('/users',(req,res)=>{
  //res.send('creating that new user you requested');
  const newUser = new User({email: 'j@j.j' });
  newUser.save(function(){
    //send response back in callback function
    res.send('Created a new user');
  });
});
router.put('/users/:userId', (req,res)=>{
  res.send('updates everryywhere!');
});
router.delete('/users/:userId',(req,res)=>{
  res.send('burning it down!');
});

module.exports = router;
