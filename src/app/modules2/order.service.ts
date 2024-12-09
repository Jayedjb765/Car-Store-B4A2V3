import { Car } from '../modules/car.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const car = await Car.findById(orderData.car);

  if (!car || car.quantity < orderData.quantity) {
    throw new Error('Insufficient stock or car not found.');
  }

  car.quantity -= orderData.quantity;
  car.inStock = car.quantity > 0;
  await car.save();

  return await Order.create({
    ...orderData,
    totalPrice: car.price * orderData.quantity,
  });
};

const getOrders = async () => {
  return await Order.find().populate('car');
};

const calculateRevenue = async () => {
  const revenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);
  return revenue[0]?.totalRevenue || 0;
};

export const OrderService = { createOrder, getOrders, calculateRevenue };
