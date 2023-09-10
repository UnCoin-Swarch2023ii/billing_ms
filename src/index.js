const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Database = require("./config/database");

// Crear una instancia de Express
const app = express();

// Configurar el puerto del servidor
const port = process.env.PORT || 4000;

const mongoDb = new Database();
mongoDb.connect();

// Configurar middleware
app.use(cors());
app.use(express.json()); // Parsear solicitudes JSON

// Definir rutas
const shipmentRoutes = require('./routes/shipment.route.js');
app.use('/shipments', shipmentRoutes);

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto http://localhost:${port}`);
});

