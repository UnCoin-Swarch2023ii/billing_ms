import ShipmentModel from "../models/Shipment.model.js";

const deleteShipment = async (req, res) => {
  try {
    const { id } = req.params;

    const shipmentDeleted = await ShipmentModel.findByIdAndDelete(id);

    if (!shipmentDeleted) {
      return res
        .status(400)
        .json({ ok: false, message: "No se pudo eliminar la factura" });
    }

    return res
      .status(200)
      .json({ ok: true, message: "Factura eliminada", data: shipmentDeleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      mensaje: "Ocurrió un error en el servidor al eliminar la factura",
    });
  }
};

export default deleteShipment;