const express = require('express')
const app = express()
const port = 5000

 const puerto = async () => {
  try {

    app.get('/index', (req, res) => {
        res.send('Hola mundo, el servidor está funcionando correctamente desde la función');
    })
    
    app.listen(port, ()=> {
      console.log(`Servidor iniciado correctamente http://localhost:${port}/index`)
    })

  } catch (error) {
    console.error('Error el servidor:', error)
  }
}

puerto()