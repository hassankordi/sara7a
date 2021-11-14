const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{type:String , required:true} ,
    email:{type:String , required:true} ,
    phone:{type:String , required:true} ,
    age:{type:String , required:true} ,
    password:{type:String , required:true} ,
    confirmPassword:{type:String } ,
    address:{type:String , default:'Egypt'} ,
})


userSchema.pre('save' , async function(){
    this.password = await bcrypt.hash(this.password , 8)
})
module.exports = userSchema