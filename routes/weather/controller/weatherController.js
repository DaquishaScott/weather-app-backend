const Weather = require('../model/Weather') 



async function getAllWeather(req, res){
   try {
      const foundWeather =await User.find({})
      res.json({message:"Weather found",payload: foundWeather})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
      
   }
}
async function createWeather(req, res){
   try {
      
      const savedWeather = await newWeather.save()
      res.json({message:"Weather found", payload: savedWeather})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
   }
}
async function updateWeatherById(req, res){
   try {
      const updatedWeather =await User.findByIdAndUpdate(req.param.id, req.body)
      
      res.json({message:"Weather Updated", payload: updatedWeather})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
   }
}

async function deleteWeatherById(req, res){
   try {
      const deleteWeather =await User.findByIdAndDelete(req.param.id)
      
      res.json({message:"Weather Deleted.", deleteWeather})
   } catch (error) {
      res.status(500).json({message:"Error", error:error})
     
   }
}

module.exports={
   getAllWeather,
   createWeather,
   updateWeatherById,
   deleteWeatherById
}