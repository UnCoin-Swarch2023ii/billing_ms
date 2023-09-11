import { Schema, model } from 'mongoose';

const shipmentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  shipmentValue: {
    type: Number,
    required: true,
  },
  shipmentDate: {
    type: Date,
    required: true,
  },
});

const Shipment = model('Shipment', shipmentSchema);

export default Shipment;