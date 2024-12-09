import { Request, Response } from 'express';
import { CreateCarDB } from './car.service';
import carSchema from './car.zodval';

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: cardata } = req.body;
    const zodValidation = carSchema.parse(cardata);
    const result = await CreateCarDB.createCarIntoDB(zodValidation);
    res.status(200).json({
      message: 'Car is created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: err,
    });
  }
};

const getAllCarsfromdb = async (req: Request, res: Response) => {
  try {
    const result = await CreateCarDB.getAllCars();
    res.status(200).json({
      success: true,
      message: 'Car is Retrive successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'SOmething went wrong',
      error: err,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carid } = req.params;
    const result = await CreateCarDB.getSingleCarFromDb(carid);
    res.status(200).json({
      success: true,
      message: 'Single Car is Retrive successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'SOmething went wrong',
      error: err,
    });
  }
};
const deleteCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CreateCarDB.deleteCarFromDb(carId);
    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'SOmething went wrong',
      error: err,
    });
  }
};
const updateCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updateData = req.body;

    const result = await CreateCarDB.updateCarInDb(carId, updateData);

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'SOmething went wrong',
      error: err,
    });
  }
};

export const Carcontroller = {
  createCar,
  getAllCarsfromdb,
  getSingleCar,
  deleteCar,
  updateCar,
};
