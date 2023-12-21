import { config } from 'dotenv';
config()

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors, { CorsOptions } from 'cors'

const PORT = 5000;

const app = express();

const options: CorsOptions = {
    origin: '*'
}

app.use(cors(options))
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send('Hello World')
});

app.get("/dashboard", (req: Request, res: Response) => {
    res.send('In the dashboard')
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port: http://localhost:${PORT}`);
    app.listen(PORT);
});