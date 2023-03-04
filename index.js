const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes')
const ApiRouter = require('./routes/API/movies')
const DB = require('./connectDB')
require('dotenv').config()
require('colors')
const app = express()
const port = process.env.PORT  || 3000 
app.use(express.json());
app.use(cors())
DB.connectDB()


//End dataBase Connection 
app.use('/', Router);
app.use('/api',ApiRouter);



  
app.listen(port, () => console.log(`App listening on port ${port}!`));


