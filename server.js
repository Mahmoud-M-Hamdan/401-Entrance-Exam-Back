const express = require('express')
const cors = require('cors')
require('dotenv').config();
const mongoose = require("mongoose");
const server = express()
server.use(cors())
server.use(express.json())
const PORT = process.env.PORT
const MONGOOSE_SERVER = process.env.MONGOOSE_SERVER
const getApiData = require('./controllers/ApiController')
const { getData, createData, deleteData, updateData } = require('./controllers/CRUDContoller')

mongoose.connect(`${MONGOOSE_SERVER}`, { useNewUrlParser: true });

server.listen(PORT, () => {
    console.log(`I am working on ${PORT}`)
})

server.get('/', (req, res) => {
    res.send('مساء اللوز')
})

server.get('/getApiData', getApiData)

server.get('/getData', getData)
server.post('/createData', createData)
server.delete('/deleteData/:id', deleteData)
server.put('/updateData/:id', updateData)
