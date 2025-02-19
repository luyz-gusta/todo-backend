const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./src/routes/taskRoutes.js");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use((request, response, next) => {
  response.header("Acess-Control-Allow-Origin", "*");
  response.header(
    "Acess-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  app.use(cors());
  next();
});

app.use(express.json());

app.use('/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
