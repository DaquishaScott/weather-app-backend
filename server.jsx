const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

app = express();

app.use(logger('dev'));
app.use(express.json());

 const weatherSchema = new mongoose.Schema({
    date: String,
    temperature: Number,
    humidity: Number,
    description: String
})


app.listen(3000,()=>{
    console.log('Server running on server 3000.')
})