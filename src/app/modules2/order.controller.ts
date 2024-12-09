import { Request, Response } from 'express';
import { OrderService } from './order.service';
import orderSchema from './order.zodval';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = orderSchema.parse(req.body);
    const result = await OrderService.createOrder(orderData);

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      message: 'Order creation failed',
      status: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getOrders();
    res.status(200).json({
      message: 'Orders retrieved successfully',
      status: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to retrieve orders',
      status: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  calculateRevenue,
};
