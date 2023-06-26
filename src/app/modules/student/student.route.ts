import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';

import {
  academicDeleteStudent,
  academicSingleStudent,
  academicUpdateStudent,
  getAllStudent,
} from './student.controller';
import { updateStudentZodSchema } from './student.validation';

const studentRouter = express.Router();

studentRouter.get('/', getAllStudent);
studentRouter.get('/:id', academicSingleStudent);
studentRouter.patch(
  '/:id',
  validateRequest(updateStudentZodSchema),
  academicUpdateStudent
);
studentRouter.delete('/:id', academicDeleteStudent);

export default studentRouter;
