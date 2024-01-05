import { config } from 'dotenv';
config();

import express, { Request, Response, response } from 'express';
import mongoose from 'mongoose';
import cors, { CorsOptions } from 'cors';
import Order from './models/Order';
import Contact from './models/Contact';

const PORT = 5000;

const app = express();

const options: CorsOptions = {
    origin: '*',
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.get('/dashboard', (req: Request, res: Response) => {
    res.send('In the dashboard');
});

app.post('/pedidos', async (req: Request, res: Response) => {
    const newContact = new Contact({
        name: req.body.customerName,
        fId: req.body.customerId,
        address: req.body.customerAddress,
    });
    const createdContact = await newContact.save();

    const newOrder = new Order({
        quantity: req.body.quantity,
        date: req.body.date,
        packaging: req.body.packaging,
        price: req.body.price,
        customer: createdContact._id,
        issuerName: req.body.issuerName,
        licenseNumber: req.body.licenseNumber,
        driverId: req.body.driverId,
        driverName: req.body.driverName,
    });
    const createdOrder = await newOrder.save();

    res.json({ order: createdOrder, contact: createdContact });
});

app.get('/pedidos', async (req: Request, res: Response) => {
    try {
        const orders = await Order.find().populate('customer').exec();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/pedidos/:orderId', async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId);
    res.json(order);
});

app.get('/contactos', async (req: Request, res: Response) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

app.delete('/contactos/:contactId', async (req: Request, res: Response) => {
    const contactId = req.params.contactId;
    const contacts = await Contact.findByIdAndDelete(contactId);
    res.json(contacts);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port: http://localhost:${PORT}`);
    app.listen(PORT);
});
