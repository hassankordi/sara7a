const mongoose = require ('mongoose')

const messagesSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId , ref:'user'} , 
    content: {type:String} , 
})

module.exports = messagesSchema