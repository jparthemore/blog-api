/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users',(req, res)=>{
  // res.send('getting all dem users!!');//documents - users
  //the { is the query} //go find these things then run the function when find is done
  //async - not necessarily right away
  User.find({},function(err,docs){
    if(err) return res.status(500).json({err: err});//return will
    return res.status(200).json({
      users: docs //left side implicitly in quotes - label, right side what comes back
    });
  });
});
//get that one user byt the _id
router.get('/users/:userId',(req,res)=>{
  User.find({_id : req.params.userId },function(err,users){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      users: users
    });
  });
});
router.post('/users',(req,res)=>{
  //res.send('creating that new user you requested');
  /*const newUser = new User({email: 'j@j.j' });
  newUser.save(function(){
    //send response back in callback function
    res.send('Created a new user');
  });*/

  if(!req.body.password){
    return res.status(400).json({
      msg: 'Bad Request'
    });
  }
  const newUser = new User(req.body);
  newUser.setPassword(req.body.password);
  newUser.save(function(err,user){
    if(err) return res.status(500).json({err: err});
    return res.status(201).json({
      msg: "Successfully created user"
    });
  });
});

router.put('/users/:userId', (req,res)=>{
  //const create new update object
  User.findOneAndUpdate({_id: req.params.userId}, req.body,function(err, oldUser){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Successfully updated user"
    });
  });
});

router.delete('/users/:userId',(req,res)=>{
  User.findOneAndRemove({_id: req.params.userId},function(err,removedUser){
    if(err) return res.status(500).json({err:err});
    //if(!removedUser)
    return res.status(200).json({
      msg: "User successfully removed"
    });
  });
});

module.exports = router;
