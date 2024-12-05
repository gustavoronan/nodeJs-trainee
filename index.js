const express = require('express')

console.log(express)

const server = express()

server.get('/curso', (req, res)=>{
    return res.json({curso: "Hello World"})
})

server.listen(3000)