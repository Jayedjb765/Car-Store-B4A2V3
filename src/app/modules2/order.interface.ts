import { Types } from 'mongoose';

export interface TOrder {
  email: string;
  car: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
