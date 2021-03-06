/*jshint esversion: 6*/
const express = require('express');
const mongoose = require('mongoose');
const server = express();

//const { mongoURI } = require('./credentials');//destructuring new JS thing name has to be same and must be an object
//const mongoURIT = require('./credentials').mongoURI; /;old style still works
const mongoURI = process.env.MONGOURI || require('./credentials').mongoURI;
const port = process.env.PORT || 8080;

//connect to the database
mongoose.connect(mongoURI,{
  useMongoClient: true
});

//middlware imports
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//router imports
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

//wire up the middleware
server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); //need this if use forms

//wire up routers
server.use(userRouter);
server.use(postRouter);


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
