import { TCar } from './car.interface';
import { Car } from './car.model';
import mongoose from 'mongoose';

const createCarIntoDB = async (car: TCar) => {
  const result = await Car.create(car);
  return result;
};
const getAllCars = async () => {
  const result = await Car.find();
  return result;
};
const getSingleCarFromDb = async (_id: string) => {
  const result = await Car.findOne({ _id });
  return result;
};
const deleteCarFromDb = async (carId: string) => {
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new Error('Invalid car ID');
  }
  const result = await Car.findByIdAndDelete(carId);
  if (!result) {
    throw new Error('Car not found');
  }
  return result;
};
const updateCarInDb = async (carId: string, updateData: Partial<TCar>) => {
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new Error('Invalid car ID');
  }
  const result = await Car.findByIdAndUpdate(carId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new Error('Car not found');
  }
  return result;
};
export const CreateCarDB = {
  createCarIntoDB,
  getAllCars,
  getSingleCarFromDb,
  deleteCarFromDb,
  updateCarInDb,
};
