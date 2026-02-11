const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" }
];

// GET
app.get("/users", (req, res) => {
  res.json(users);
});

// POST
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
