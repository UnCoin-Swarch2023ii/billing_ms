import { schedule } from 'node-cron';
import ShipmentModel from '../models/Shipment.model.js';

export default schedule('1 0 8 * * *', async () => {
  try {
    const fechaComparar = new Date(); 
    const shipments = await ShipmentModel.find({ 
        $expr: {
            $and: [{ $eq: [{ $dayOfMonth: '$shipmentDate' }, { $dayOfMonth: fechaComparar }] }]
        }
        });

    if(shipments){
        console.log('Envíos programados para hoy:', shipments);
    } else {
        console.error('No hay envíos');
    }
    
  } catch (error) {
    console.error('Error al enviar el recordatorio:', error);
  }
}, {
  timezone: 'America/Bogota',
});
