
const express = require('express');
const app = express();
const treas = 3000;
app.get('/', (req, res) => {res.send('Hello Aquí están tus treas!'); }
);
app.use((req, res) => {res.status(404).send('No encontrado'); });
app.get('/tareas/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Buscando la tarea con ID ${id}`);
});
app.listen(treas, () => {console.log(`Servidor escuchando en http://localhost:${treas}`); });
