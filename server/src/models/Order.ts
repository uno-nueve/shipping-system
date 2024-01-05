import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    quantity: Number,
    date: String,
    packaging: String,
    price: Number,
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
    issuerName: String,
    licenseNumber: Number,
    driverId: Number,
    driverName: String,
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;
