const express = require ('express')
const app = express ()
const port = 3000

app.get ('/', (req,res) => {
    res.send ('<h1> Bienvenido a la academia Full Stack</h1>')
})

app.get('/cursos', (req,res)=>{
    res.json({id:1, nombre: "Curso de JS"})
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port} `)
})