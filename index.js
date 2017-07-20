/*jshint esversion: 6*/
const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

//middlware imports
const morgan = require('morgan');
const cors = require('cors');

//wire up the middleware
server.use(morgan('dev'));
server.use(cors());

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
