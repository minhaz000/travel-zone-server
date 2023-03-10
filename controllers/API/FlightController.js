const { ObjectId } = require('mongodb')
const DB = require('../../connectDB')
const flights = DB.client.db('travel-zone').collection('flights')

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
    let directResult = null
    const timeCal = (departure, arrival)=>{
        const   departureTime=  departure.split(' ')
        const departureTimeHours = departureTime[1]==='pm' ?  JSON.parse(departureTime[0].split(':')[0])+12 : JSON.parse(departureTime[0].split(':')[0]) 
        const departureTimeMinute = JSON.parse(departureTime[0].split(':')[1]) 
        const departureTimeTotal =  departureTimeHours*60 + departureTimeMinute 
        const  arrivalTime=  arrival.split(' ')
        const arrivalTimeTimeHours = arrivalTime[1]==='pm' ?  JSON.parse(arrivalTime[0].split(':')[0])+12 : JSON.parse(arrivalTime[0].split(':')[0]) 
        const arrivalTimeMinute = JSON.parse(arrivalTime[0].split(':')[1]) 
        const arrivalTimeTotal =  arrivalTimeTimeHours*60 + arrivalTimeMinute

       return arrivalTimeTotal-departureTimeTotal
  
}
 
    req.query.return==1 ? filter['return'] = true : null 
    req.query.destination ? filter['destination'] = req.query.destination : null 
    req.query.airlines_name ? filter['airlines_name'] = req.query.airlines_name : null 
   
   if( req.query.cheapest==1){ 
                    let totalPrice = 0
                    const price = await flights.find({}).toArray()
                    price.map(item =>{  totalPrice = totalPrice+item.price } ) 
                    const average = totalPrice/price.length 
                    filter['price'] = { $lt: average }
    }
    if(req.query.best==1){ 
                    let totalPrice = 0
                    const price = await flights.find({}).toArray()
                    price.map(item =>{  totalPrice = totalPrice+item.price } ) 
                    const average = totalPrice/price.length 
                    filter['price'] = { $gt: average }
    }
    

    if(req.query.quickest==1) {
                    let totalTripTime =0  
                    const time = await flights.find({}).toArray()
                
                  
                    time.map(item=> {
                       const tripTime =  timeCal(item.time.departure,item.time.arrival)
                       totalTripTime = totalTripTime+tripTime

                       console.log("time:", tripTime, "ID:" ,item._id )
                            
                    })
                    const averageTripTime = totalTripTime/time.length
                    
                    directResult =  time.filter((time)=> {
                    const tripTime =  timeCal(time.time.departure,time.time.arrival)
                    return tripTime < averageTripTime
                })
               
                

        
    }

    const result = directResult||await flights.find(filter, { sort: { _id:-1 }}).toArray()
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