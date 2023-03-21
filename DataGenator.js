// const data = require('./genarator.json')
const fs = require('fs')
/**
 * 
 * @param {Number} limit
 * @param {*} data 
 */
const Genarator=(limit=1)=>{
  const generated = []
  const Schema = {
    // flight_name
    f1:["A380 Airbus","A300 Airbus","B787 Airbus", "C-130 Airbus" ],
    // destination
    f2 : ['Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437'],
    // location
    f3 : ['Dhaka - Karachi','Lahore - Karachi','Lahore - Dubai','Dhaka - Dubai' , 'Lahore - Dhaka', 'Dhaka - Japan'],
    // airlines_logo_URL
    f4 :['https://i.ibb.co/nwLnwMQ/Qatar.jpg','https://i.ibb.co/C7xkd3Z/emirates.png','https://i.ibb.co/GcHPnfY/Fly-Dubai-Logo.png','https://i.ibb.co/vj72XDr/qantas.png' , 'https://i.ibb.co/MS750JV/japanairline.png'],
    // airlines_name
    f5 : ["Qatar Airways", "Emirates" ,"Flydubai","Qantas","Japan Airline"],
    // Hero_URL
    f6:['https://i.ibb.co/BsyDKJL/Rectangle-3-1.png'],
    // economy_URL
    f7:[
  "https://i.ibb.co/vmdMD3N/Frame-189.png",
  "https://i.ibb.co/6R4C2yP/Frame-186.png",
  "https://i.ibb.co/5kgphhV/Frame-185.png",
  "https://i.ibb.co/qxs0gMt/Frame-184.png",
  "https://i.ibb.co/0CvkxrB/Frame-183.png",
  "https://i.ibb.co/KWLpkXM/Frame-142.png",
   ] ,
    // ratings
    f8:[4.5,4.9,3.5,4.3,4.7],
    // price
    f9:[340,450,560,70,200,140,390,400,265,57],
    // time
    f10:[
      { "departure":"10:30 am" , "arrival": "12:45 am","date":"2023-03-01" },
      { "departure":"10:00 am" , "arrival": "1:00 pm" ,"date":"2023-03-05"},
      { "departure":"10:50 am" , "arrival": "11:30 am","date":"2023-03-11" },
      { "departure":"9:40 am" , "arrival": "11:45 am" ,"date":"2023-03-15" },
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-20" },
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-25" },
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-31" },
    ],

    // return_time
    f11:[
      { "departure":"10:30 am" , "arrival": "12:45 am","date":"2023-03-03" },
      { "departure":"10:00 am" , "arrival": "1:00 pm","date":"2023-03-05" },
      { "departure":"10:50 am" , "arrival": "11:30 am","date":"2023-03-16" },
      { "departure":"9:40 am" , "arrival": "11:45 am" ,"date":"2023-03-18"},
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-22" },
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-24" },
      { "departure":"10:30 am" , "arrival": "11:00 am","date":"2023-03-31" },
    ],
    // return
    f12 : [true , false],
    // flight_capacity 
    f13 : [
      { "economy":400,"first":60,"busines":80},
      { "economy":510,"first":70,"busines":20},
      { "economy":600,"first":60,"busines":12},
      { "economy":560,"first":20,"busines":30},
      { "economy":330,"first":40,"busines":80},
      { "economy":410,"first":20,"busines":30}
  ]
  }
  for(let i=0;i<limit ; i++){
    flight = Math.floor(Math.random() * Schema.f5.length)
     data = {
        flight_name: `${Schema.f5[flight]} A380 Airbus`,
        destination: Schema.f2[Math.floor(Math.random() * Schema.f2.length)] ,
        location: Schema.f3[Math.floor(Math.random() * Schema.f3.length)],
        airlines_logo_URL : Schema.f4[flight] , 
        airlines_name:Schema.f5[flight],
        Hero_URL : Schema.f6[Math.floor(Math.random() * Schema.f6.length)] , 
        economy_URL : Schema.f7,
        first_URL : [] ,
        busines_URL : [],
        ratings :Schema.f8[Math.floor(Math.random() * Schema.f8.length)],
        price :Schema.f9[Math.floor(Math.random() * Schema.f9.length)], 
        time :Schema.f10[Math.floor(Math.random() * Schema.f10.length)], 
        return_time :Schema.f11[Math.floor(Math.random() * Schema.f11.length)],
        return : Schema.f12[Math.floor(Math.random() * Schema.f12.length)],
        airlines_Policies :"",
        flight_capacity : Schema.f13[Math.floor(Math.random() * Schema.f13.length)] ,
        reviews:[]
     }

     


     generated.push(data)
  }

  return generated
}

const result = JSON.stringify( Genarator(80))




fs.writeFile('./genarator.json', result, (err)=>{
  try {
    console.log( " done")
    
  } catch (err) {
    console.log( err)
    
  }
})
console.log()
// console.log( JSON.parse(result) )