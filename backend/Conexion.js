// backend/server.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

// Configura tu base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // pon tu contraseña si tiene
  database: "resrvas_hotel"
});

// Ruta de prueba
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("Servidor backend escuchando en http://localhost:3001");
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});