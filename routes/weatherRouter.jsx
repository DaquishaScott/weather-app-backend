const express = require('express')
const router= expressRouter()

const {
    getAllWeather,
    createWeather,
    updateWeatherById,
    deleteWeatherById

} = require('.controller/weathercontroller')

router.get('/get-all-weather', getAllWeather)
router.post ('/create-weather', createWeather)
router.put ('/update-weather/:id', updateWeatherById)
router.delete ('/delete-weather/:id', deleteWeatherById)

module.exports ={
    getAllWeather,
    createWeather,
    updateWeatherById,
    deleteWeatherById
}