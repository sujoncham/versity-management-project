import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import { createFacultyZodSchema } from '../academicFaculty/faculty.validation';
import { createFaculty, createStudent } from './user.controller';
import { createUserZodSchema } from './user.validation';

const routerUser = express.Router();

routerUser.post(
  '/createStudent',
  validateRequest(createUserZodSchema),
  createStudent
);

routerUser.post(
  '/create-faculty',
  validateRequest(createFacultyZodSchema),
  createFaculty
);

// routerUser.post(
//   '/create-admin',
//   validateRequest(createAdminZodSchema),
//   UserController.createAdmin
// );

export default routerUser;
