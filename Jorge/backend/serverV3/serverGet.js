// Creen un servidor con las siguientes rutas:
// GET /tareas: Que devuelva un mensaje "Aquí están tus tareas".
// GET /tareas/:id: Que devuelva "Buscando la tarea con ID [id]".
// Bonus: Intentar usar res.status(404).send('No encontrado') para rutas que no existan.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/tareas', (req, res) => {res.send('Aquí están tus tareas') })
app.get('/tareas/:id', (req, res) => {const id = req.params.id; res.send(`Buscando la tarea con ID ${id}`)})
app.use((req, res) => {res.status(404).send('No encontrado')})
app.listen(PORT, () => {console.log(`Para acceder al enlace : http://localhost:${PORT}/tareas`)})