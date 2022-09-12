import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on ${process.env.PORT}`);
})