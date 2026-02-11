const express = require('express');
const app = express();

app.get('/hola', (req, res) => {
    res.send('Servidor Funcionando!');
});

app.listen(5000);