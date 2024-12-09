import { z } from 'zod';
import { Types } from 'mongoose';

const orderSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  car: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), 'Invalid car ID')
    .transform((val) => new Types.ObjectId(val)), // Convert string to ObjectId
  quantity: z
    .number()
    .min(1, 'Quantity must be at least 1')
    .int('Quantity must be an integer'),
  totalPrice: z.number().min(0, 'Total price must be a positive number'),
  createdAt: z.date().optional(), // Optional field
  updatedAt: z.date().optional(), // Optional field
});

export default orderSchema;
