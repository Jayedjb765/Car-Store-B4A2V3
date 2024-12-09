import { z } from 'zod';
const carSchema = z.object({
  brand: z
    .string()
    .nonempty('Brand is required. Please provide the car manufacturer name.')
    .trim(),
  model: z
    .string()
    .nonempty('Model is required. Please specify the car model.')
    .trim(),
  year: z
    .number()
    .min(1886, 'Year must be after 1886. Please provide a valid year.')
    .max(new Date().getFullYear(), 'Year cannot be in the future.'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']),
  description: z
    .string()
    .nonempty('Description is required. Please provide details about the car.')
    .trim(),
  quantity: z
    .number()
    .min(0, 'Quantity cannot be negative. Please specify a valid quantity.'),
  inStock: z.boolean({
    required_error:
      'In-stock status is required. Please indicate if the car is available.',
  }),
  createdAt: z.date().optional(), // Optional because it's auto-generated
  updatedAt: z.date().optional(), // Optional because it's auto-updated
});
export default carSchema;
