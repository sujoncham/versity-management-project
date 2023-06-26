import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import { createStudent, getAllUsers } from './user.controller';
import { createUserZodSchema } from './user.validation';

const routerUser = express.Router();

routerUser.get('/', getAllUsers);
routerUser.post(
  '/createStudent',
  validateRequest(createUserZodSchema),
  createStudent
);
routerUser.post(
  '/createDepartment',
  validateRequest(createUserZodSchema),
  createStudent
);
routerUser.post(
  '/createFaculty',
  validateRequest(createUserZodSchema),
  createStudent
);

export default routerUser;
