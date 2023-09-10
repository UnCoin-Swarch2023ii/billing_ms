const express = require('express');
const router = express.Router();

const getAll = require("../controllers/getAll");
const getById = require("../controllers/getById");
const getByUser = require("../controllers/getByUser");
const create = require("../controllers/create");
const update = require("../controllers/update");
const deleteS = require("../controllers/delete");

// Ruta para obtener todos los envíos
router.get("/", getAll);

router.get("/get-shipment/:id", getById);

router.get("/userShipments/:id", getByUser);

router.post("/", create);

router.patch("/update/:id", update);

router.delete("/:id", deleteS);

module.exports = router;
