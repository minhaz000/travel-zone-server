const express = require('express');
const MovieController = require('../../controllers/API/MovieController');
const Middleware = require('../../middlewares/Middleware')
const router = express.Router();

//  route for api 
router.get('/',MovieController.read)
router.get('/get-all',MovieController.readALL)
router.get('/get-movies',MovieController.search)
router.post('/add-movie',Middleware.VerifyAdmin,MovieController.create)
router.get('/edit-movie',Middleware.VerifyAdmin,MovieController.edit)
router.get('/delete-movie',Middleware.VerifyAdmin,MovieController.delete)
router.get('/update-movie',MovieController.update)

module.exports= router