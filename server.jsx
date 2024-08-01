const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

mongoose
.connect("mongodb://127.0.0.1:27017/weather-app")
.then(()=>{
    console.log('MONGO DB CONNECTED')
}).catch((e)=>{
    console.log(e)
})

app = express();

app.use(logger('dev'));
app.use(express.json());
app.use('/api/weather', weatherRouter)

 const weatherSchema = new mongoose.Schema({
    date: String,
    temperature: Number,
    humidity: Number,
    description: String
})


app.listen(3000,()=>{
    console.log('Server running on server 3000.')
})