import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true, trim: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const Order = model<TOrder>('Order', orderSchema);