import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Routes/users.route.js';
import accountRoute from './Routes/accounts.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/account", accountRoute);

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Prime Wallet API"});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`PrimeWallet Server is running on port ${PORT}`);
});
