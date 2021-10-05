'use strict'
const watchModel = require('./../models/CRUDModel')


const getData = async (req, res) => {
    watchModel.find({}).then(ele => {
        res.send(ele)
    })
}


const createData = async (req, res) => {
    let responseData = req.body
    let newData = new watchModel(responseData)
    newData.save()
    watchModel.find({}).then(ele => {
        res.send(ele)
    })
}


const deleteData = async (req, res) => {
    const id = req.params.id
    watchModel.findByIdAndDelete(id).then(() => {
        watchModel.find({}).then(ele => {
            res.send(ele)
        })
    })
}


const updateData = async (req, res) => {
    const responseData = req.body
    const id = req.params.id
    watchModel.findOne({ id: id }).then(async (ele) => {
        ele.name = responseData.name,
            ele.image = responseData.image,
            ele.price = responseData.price,
            ele.description = responseData.description
        await ele.save()
        await watchModel.find({}).then(ele => {
             res.send(ele)
        })
    })
}

module.exports = { getData, createData, deleteData, updateData }