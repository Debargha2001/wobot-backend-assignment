const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


const app = express();

app.use(express.json());

app.use('/products', require('./routes/productRoutes'));
app.use('/users', require('./routes/userRoutes'));

const DB = process.env.DATABASE;
mongoose.connect(DB).then(connection => {
    console.log("DB connection successful!");
}).catch(err => {
    console.log(err.message);
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
})