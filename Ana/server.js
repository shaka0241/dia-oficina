const express = require('express')
const app = express();

app.get('/', (req,res) => {

    res.send(' ¡Serivdor funcionando!');
})

app.listen(3000)

