const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

//middlware imports
const morgan = require('morgan');

//wire up the middleware
server.use(morgan('dev'));

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
