"use strict"

const express = require(`express`)
const app = express()
const port = 3000
const userName = `Sonia`

app.get(`/`, (req, res) =>{
    res.send(`<h1>Hola ${userName}, bienvenid@ a la academia Full Stack</h1>`)
})

app.get(`/cursos`, (req, res) =>{
    res.json([
        {id: 1, nombre: `Curso de JavaScript`, duracion: `4 semanas`},
        {id: 2, nombre: `Curso de Python`, duracion: `6 semanas`},
        {id: 3, nombre: `Curso de React`, duracion: `5 semanas`}
    ])
})

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})