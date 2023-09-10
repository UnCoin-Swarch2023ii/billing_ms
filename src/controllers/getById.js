const ShipmentModel = require("../models/Shipment.model");

const getShipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const shipment = await ShipmentModel.findById(id);

    return res.status(200).json({ ok: true, data: shipment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Error obteniendo factura" });
  }
};

module.exports = getShipmentById;