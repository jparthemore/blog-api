/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts',(req,res)=>{
  Post.find({},function(err,docs){
    if (err) return res.status(500).json({err: err});
    return res.status(200).json({
      posts: docs
    });
  });
});

router.get('/posts/:postId',(req,res)=>{
  Post.find({_id: req.params.postId},function(err,docs){
    if(err)return res.status(500).json({err: err});
    return res.status(200).json({
      posts: docs
    });
  });
});

router.post('/posts',(req,res)=>{
  const newPost = new Post(req.body);
  newPost.save(function(err,post){
    if(err) return res.status(500).json({err: err});
    return res.status(201).json({
      msg: "Successfully created post"
    });
  });
});

router.put('/posts/:postId',(req,res)=>{
  Post.findOneAndUpdate({_id: req.params.postId}, req.body,function(err,oldPost){
    if (err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Successfully updated post"
    });
  });
});

router.delete('/posts/:postId',(req,res)=>{
  Post.findOneAndRemove({},function(err,removedPost){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Post successfully removed"
    });
  });
});

module.exports = router;
