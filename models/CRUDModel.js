'use strict'
const mongoose = require('mongoose')



const ApiSchema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String
})


const watchModel= mongoose.model('watch',ApiSchema)

module.exports=watchModel