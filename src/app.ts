import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car.router';
import { OrderRoutes } from './app/modules2/order.router';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/cars', CarRoutes);
app.use('/api/orders', OrderRoutes);

const getAcontroller = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to car api',
  });
};

app.get('/', getAcontroller);

export default app;
