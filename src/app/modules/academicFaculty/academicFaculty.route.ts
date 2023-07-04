import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';

import {
  academicDeleteFaculty,
  academicSingleFaculty,
  academicUpdateFaculty,
  createAcademicFaculty,
  getAllFaculty,
} from './academicFaculty.controller';
import {
  createFacultyZodSchema,
  updateFacultyZodSchema,
} from './academicFaculty.validation';

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
