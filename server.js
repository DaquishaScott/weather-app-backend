const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
const Weather = require('./routes/weather/model/Weather')
const weatherRouter = require('./routes/weatherRouter')

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



app.listen(3000,()=>{
    console.log('Server running on server 3000.')
})