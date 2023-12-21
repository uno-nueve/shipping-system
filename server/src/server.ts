import { config } from 'dotenv';
config()

import express, { Request, Response, response } from 'express';
import mongoose from 'mongoose';
import cors, { CorsOptions } from 'cors'
import Order from './models/Order';

const PORT = 5000;

const app = express();

const options: CorsOptions = {
    origin: '*'
}

app.use(cors(options));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send('Hello World')
});

app.get("/dashboard", (req: Request, res: Response) => {
    res.send('In the dashboard')
});

app.post("/pedidos", async (req: Request, res: Response) => {
    const newOrder = new Order({
        quantity: req.body.quantity,
        customerId: req.body.customerId,
    });
    const createdOrder = await newOrder.save()
    res.json(createdOrder)
});

app.get("/pedidos", async (req: Request, res: Response) => {
    const orders = await Order.find()
    res.json(orders)
});

app.delete("/pedidos/:orderId", async (req: Request, res: Response) => {
    const orderId = req.params.orderId
    const order = await Order.findByIdAndDelete(orderId)
    res.json(order)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port: http://localhost:${PORT}`);
    app.listen(PORT);
});