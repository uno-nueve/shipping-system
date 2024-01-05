import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    fId: Number,
    address: String,
});

const ContactModel = mongoose.model('Contact', ContactSchema);

export default ContactModel;
