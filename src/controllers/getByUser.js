import ShipmentModel from "../models/Shipment.model.js";

const getByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const shipments = await ShipmentModel.find({ userId: id });

    return res.status(200).json({ ok: true, data: shipments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Error obteniendo facturas" });
  }
};

export default getByUser;