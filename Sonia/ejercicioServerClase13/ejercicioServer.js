"use strict"

const express = require(`express`)
const app = express()

app.get(`/`, (req, res) =>{
    res.send(`Has entrado al nuevo server. Saludos!`)
})

const port = 5000

app.listen(port)

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})