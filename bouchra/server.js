const express = require("express");

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" }
];

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de bichoooooooooo" });
});


app.get("/api/cursos", (req, res) => {
  res.json({ cursos: ["JavaScript", "Python", "Java"] });
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});