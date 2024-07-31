const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
    date:{
        type: Date
    },
    temperature:{
        type: Number
    },
    humidity:{
        type: Number
    },
    description:{
        type: String
    },
    
   
})
module.exports = mongoose.model('Weather', weatherSchema)