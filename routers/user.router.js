/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.get('/users',(req, res)=>{
  res.send('getting all dem users!!');
});
router.get('/users/:userId',(req,res)=>{
  res.send('getting that one special someone!');
});
router.post('/users',(req,res)=>{
  res.send('creating that new user you requested');
});
router.put('/users/:userId', (req,res)=>{
  res.send('updates everryywhere!');
});
router.delete('/users/:userId',(req,res)=>{
  res.send('burning it down!');
});

module.exports = router;
