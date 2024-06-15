import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/users.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/user", userRoutes)

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Prime Wallet API"});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`PrimeWallet Server is running on port ${PORT}`);
});
