const model = require('../models/model')

exports.index = async (req,res)=>{
    res.send(" hello from index function ")
}
exports.show = async (req,res)=>{
    const result = await model.find().select({name:1, _id:0});
    res.send(" hello from index function "+ result)
}