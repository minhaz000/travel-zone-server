const {MongoClient } = require('mongodb')
require('dotenv').config()
// DataBase Connection
const  url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ah6p2gy.mongodb.net/xstream`
 const client = new MongoClient(url)
exports.connectDB =  async ()=>{
      try {
            await client.connect()
            console.log('DataBase connection established successfully'.cyan.bold)
      } 
      catch(err){ console.log( err.message.red.bold) }

    
}
exports.client = client

