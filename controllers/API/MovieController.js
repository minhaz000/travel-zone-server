const { ObjectId } = require('mongodb')
const DB = require('../../connectDB')
const movies = DB.client.db('xstream').collection('movies')

exports.read = async (req,res)=>{ 
    let HomeMovies = {}
    const latestBanner = await  movies.find({}, { sort: { _id:-1 }, limit: 5 }).toArray() 
    const latest = await  movies.find({}, { sort: { _id:-1 }}).skip(5).limit(15) .toArray() 
    const popular = await movies.find({}).toArray()
     HomeMovies={latestBanner,latest, popular}
    res.send(HomeMovies)
}
exports.readALL = async (req,res)=>{
    let allMovies = {}
    const result = await movies.find({}, { sort: { _id:-1 }}).toArray()
    allMovies = result
    res.send(allMovies)
}
exports.search = async (req,res)=>{
    let searchMovies = {}
    const query =req.query.q
    const result = await movies.find({ name: { $regex:query , $options: 'i'}},{ sort: { _id:-1 }}).toArray()
    searchMovies = result
    res.send(searchMovies)
}
exports.create =async (req,res)=>{
    const movie = req.body.movie
  const result = await  movies.insertOne(movie)
    
    res.send(result) 
}
exports.edit = (req,res)=>{
    res.send("hello from the other side ") 

}
exports.delete = (req,res)=>{
    res.send("hello from the other side ") 

}
exports.update = async (req,res)=>{
    const ID = req.query.id
    console.log( ID)
   const searchedMovie  = await  movies.find({"_id": new ObjectId(ID)}).toArray()
    res.send(["hello from the other side",searchedMovie ])
}