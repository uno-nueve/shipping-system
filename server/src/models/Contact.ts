import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    fId: Number,
    address: String,
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
});

const ContactModel = mongoose.model('Contact', ContactSchema);

export default ContactModel;
