
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la academia Fullstack</h1>');
})
    
app.get('/cursos', (req, res) => {
    res.json([
        {id: 1, nombre: 'Curso de JavaScript', duracion: '4 semanas'},
        {id: 2, nombre: 'Curso de Python', duracion: '6 semanas'},
        {id: 3, nombre: 'Curso de React', duracion: '5 semanas'}
    ]);
})

app.get('/saludo/:nombre', (req, res) => {
    const nombreUsuario = req.params.nombre
    res.send(`Hola ${nombreUsuario} Bienvenido`);
})

app.listen(port, ()=> {
    console.log(`Servidor iniciado correctamente http://localhost:${port}`)
})