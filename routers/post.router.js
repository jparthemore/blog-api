/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.get('/posts',(req,rsp)=>{
  rsp.send('getting all those posts');
});

router.get('/posts/:postId',(req,rsp)=>{
  rsp.send('getting one special post');
});

router.post('/posts',(req,rsp)=>{
  rsp.send('creating a new post');
});

router.put('/posts/:postId',(req,rsp)=>{
  rsp.send('updating a post');
});

router.delete('/posts/:postId',(req,rsp)=>{
  rsp.send('deleting a post');
});

module.exports = router;
