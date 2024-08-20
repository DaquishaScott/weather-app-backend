const express = require('express')
const router= express.Router()

const {
    getAllWeather,
    createWeather,
    updateWeatherById,
    deleteWeatherById
} = require('./weather/controller/weatherController')

router.get('/get-all-weather', getAllWeather)

router.post ('/create-weather', createWeather)

router.put ('/update-weather/:id', updateWeatherById)

router.delete ('/delete-weather/:id', deleteWeatherById)

module.exports = router