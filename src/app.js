import express from "express";
import userRoutes from "./routes/user.route.js";
import cors from 'cors';


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}))
app.use(express.json());


app.use('/user', userRoutes)

export default app;