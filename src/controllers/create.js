const ShipmentModel = require("../models/Shipment.model");

const createShipment = async (req, res) => {
  try {
    const newShipment = new ShipmentModel(req.body);

    const savedShipment = await newShipment.save();

    return res
      .status(200)
      .json({ ok: true, msg: "Event created", data: savedShipment });
      
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ ok: false, msg: "Error en la creación de la factura" });
  }
};

module.exports = createShipment;