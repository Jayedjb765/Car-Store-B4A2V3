import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>(
  {
    brand: {
      type: String,
      required: [
        true,
        'Brand is required. Please provide the car manufacturer name.',
      ],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'Model is required. Please specify the car model.'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Year of manufacture is required.'],
      min: [1886, 'Year must be after 1886. Please provide a valid year.'], // The year the first car was made
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
      min: [0, 'Price cannot be negative. Please provide a valid price.'],
    },
    category: {
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message:
          'Category must be one of: Sedan, SUV, Truck, Coupe, Convertible.',
      },
      required: [true, 'Category is required. Please select a car type.'],
    },
    description: {
      type: String,
      required: [
        true,
        'Description is required. Please provide details about the car.',
      ],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: [0, 'Quantity cannot be negative. Please specify a valid quantity.'],
    },
    inStock: {
      type: Boolean,
      required: [
        true,
        'In-stock status is required. Please indicate if the car is available.',
      ],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

export const Car = model<TCar>('Car', carSchema);
