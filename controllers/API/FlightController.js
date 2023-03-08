const { ObjectId } = require('mongodb')
const DB = require('../../connectDB')
const flights = DB.client.db('travel-zone').collection('flights')
const  timediff = require('timediff');
exports.index = async (req,res)=>{ 
    let result = {
        "massage" : "welcome to taval-zone API. Here is the list of end point provide we provide" , 
        "end-point" : ["flghts" ,  ] 
    }
    
    // const latestBanner = await  movies.find({}, { sort: { _id:-1 }, limit: 5 }).toArray() 
    // const latest = await  movies.find({}, { sort: { _id:-1 }}).skip(5).limit(15) .toArray() 
    // const popular = await movies.find({}).toArray()
    //  HomeMovies={latestBanner,latest, popular}
    res.send(result)
}
exports.show = async (req,res)=>{
    let filter = {}
 
    req.query.return==1 ? filter['return'] = true : null 
    req.query.destination ? filter['destination'] = req.query.destination : null 
    req.query.airlines_name ? filter['airlines_name'] = req.query.airlines_name : null 
   
   if( req.query.cheapest==1){ 
    let totalPrice = 0
    const price = await flights.find({}).toArray()
     price.map(item =>{  totalPrice = totalPrice+item.price } ) 
    const average = totalPrice/price.length 
     console.log( totalPrice, average)
     filter['price'] = { $lt: average }
    }
    if(req.query.best==1){ 
    let totalPrice = 0
    const price = await flights.find({}).toArray()
     price.map(item =>{  totalPrice = totalPrice+item.price } ) 
    const average = totalPrice/price.length 
     console.log( totalPrice, average)
     filter['price'] = { $gt: average }
    }

    if(req.query.quickest==1) {
        let totalTime =0  
        const time = await flights.find({}).toArray()
        const getDifference = (data)=>{
            const  time1 =  data.slite(' ')
            new Date(2015, 1, 1), new Date(`2018-05-02 ${time1[0]}`)
            // const formatedTime1 = time1.
            if(time1[1]=='pm'){  }
            const  time2 =  data1.slite(' ')

        }
        time.map(item =>{ 

          console.log( item.time.departure.split(' ')[0]  )
          console.log( item.time.arrival )
            
        })
    } 

    const result = await flights.find(filter, { sort: { _id:-1 }}).toArray()
    res.send( result )
    
}
exports.search = async (req,res)=>{
    // let searchMovies = {}
    // const query =req.query.q
    // const result = await movies.find({ name: { $regex:query , $options: 'i'}},{ sort: { _id:-1 }}).toArray()
    // searchMovies = result
    // res.send(searchMovies)
}
exports.create =async (req,res)=>{
//     const movie = req.body.movie
//   const result = await  movies.insertOne(movie)
    
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