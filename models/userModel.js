const mongoose = require("mongoose")
const {Schema} = mongoose

const User = new Schema({
    name : String ,
    email : String ,
    password : String ,
    adress : String ,
    phone : Number ,
    shopcart : Array
})

module.exports = mongoose.model("User" , User)