const express = require('express');
const app = express();
const dotenv =require('dotenv');
const path = require('path');
dotenv.config({path: path.resolve(__dirname, 'config','config.env')});

const products = require('./routes/product');
const orders = require('./routes/order');

app.use('/api', products);
app.use('/api', orders);

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});