import express, { Request, Response } from 'express';

const PORT = 5000;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send('hello world!')
});

app.listen(PORT, () => {
    console.log(`listening on port: localhost:${PORT}`)
});