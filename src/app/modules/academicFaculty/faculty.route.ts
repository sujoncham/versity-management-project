import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';

import {
  academicDeleteFaculty,
  academicSingleFaculty,
  academicUpdateFaculty,
  createAcademicFaculty,
  getAllFaculty,
} from './faculty.controller';
import {
  createFacultyZodSchema,
  updateFacultyZodSchema,
} from './faculty.validation';

const facultyRouter = express.Router();

facultyRouter.get('/', getAllFaculty);
facultyRouter.post(
  '/createAcademicFaculty',
  validateRequest(createFacultyZodSchema),
  createAcademicFaculty
);
facultyRouter.get('/:id', academicSingleFaculty);
facultyRouter.patch(
  '/:id',
  validateRequest(updateFacultyZodSchema),
  academicUpdateFaculty
);
facultyRouter.delete('/:id', academicDeleteFaculty);

export default facultyRouter;
