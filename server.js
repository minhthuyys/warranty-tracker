require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.json({ message: 'Warranty Tracker API server - Usage: https://gitlab.com/minhthu.vh.24/warranty-tracker/-/tree/master/SERVER-API' });
});

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/products',require('./products/products.controller'));
app.use('/brands',require('./brands/brands.controller'));
app.use('/merchants',require('./merchants/merchants.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port ' + port));