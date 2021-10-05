'use strict'
const axios = require("axios")
const ApiModel=require('./../models/ApiModel')


const getApiData=async(req,res)=>{
    const url='https://watches-world.herokuapp.com/watches-list'
   await axios.get(url).then(ele=>{
    let responseData =ele.data.map(elem=>{
        return new ApiModel(elem)
    })
  res.send(responseData)
    })
}


module.exports=getApiData