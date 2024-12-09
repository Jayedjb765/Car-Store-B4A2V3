import express from 'express';
import { Carcontroller } from './car.controller';

const router = express.Router();

router.post('/', Carcontroller.createCar);
router.get('/', Carcontroller.getAllCarsfromdb);
router.get('/:carid', Carcontroller.getSingleCar);
router.delete('/:carId', Carcontroller.deleteCar);
router.put('/:carId', Carcontroller.updateCar);

export const CarRoutes = router;
