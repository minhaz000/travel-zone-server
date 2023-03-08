const express = require('express');
const FlightController = require('../../controllers/API/FlightController');
const Middleware = require('../../middlewares/Middleware')
const router = express.Router();

//  route for api 
router.get('/',FlightController.index)
router.get('/flights',FlightController.show)


module.exports= router