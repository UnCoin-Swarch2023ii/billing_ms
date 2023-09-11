import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import shipmentRoutes from "./routes/shipment.route.js";
import cronJob from './services/cronJob.js';

import Database from "./config/database.js";

dotenv.config();

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
app.use('/shipments', shipmentRoutes);

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto http://localhost:${port}`);
});