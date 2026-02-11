const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   
    res.send('<h1>Welcome to Academy Full Stack</h1>');
});

app.get('/cursos', (req, res) => {
    
    res.json([
        { id: 1, nombre: 'Full Stack Developer' },
        { id: 2, nombre: 'Data Science' }
    ]);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


