const ShipmentModel = require("../models/Shipment.model");

const updateShipment = async (req, res) => {
  try {
    const { id } = req.params;

    const actualShipment = await ShipmentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!actualShipment) {
      return res
        .status(400)
        .json({ ok: false, message: "No se pudo actualizar la factura" });
    }

    return res
      .status(200)
      .json({ ok: true, message: "Factura actualizada", data: actualShipment });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ ok: false, message: "Error actualizando la factura" });
  }
};

module.exports = updateShipment;