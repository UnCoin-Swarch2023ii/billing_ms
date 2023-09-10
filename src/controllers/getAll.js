const ShipmentModel = require("../models/Shipment.model");

const getShipment = async (req, res) => {
  try {
    const shipment = await ShipmentModel.find({});
    return res.status(200).json({ ok: true, data: shipment });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Error obteniendo factura" });
  }
};

module.exports = getShipment;