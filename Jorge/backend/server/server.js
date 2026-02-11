const express = require('express')
const app = express()

 const puerto = async () => {
  try {
    
    const port = 5000;
    
    app.listen(port, ()=> {
      console.log(`Servidor iniciado correctamente http://localhost:${port}`)
    })

  } catch (error) {
    console.error('Error el servidor:', error)
  }
}

puerto()