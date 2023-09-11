import { Router } from 'express';

import getAll from "../controllers/getAll.js";
import getById from "../controllers/getById.js";
import getByUser from "../controllers/getByUser.js";
import create from "../controllers/create.js";
import update from "../controllers/update.js";
import deleteS from "../controllers/delete.js";

const router = Router();

// Ruta para obtener todos los envíos
router.get("/", getAll);

router.get("/get-shipment/:id", getById);

router.get("/userShipments/:id", getByUser);

router.post("/", create);

router.patch("/update/:id", update);

router.delete("/:id", deleteS);

export default router;
