import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    quantity: Number,
    customerId: Number,
})

const OrderModel = mongoose.model('Order', OrderSchema)

export default OrderModel