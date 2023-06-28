import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';

import {
  deleteStudent,
  getAllStudent,
  singleStudent,
  updateStudent,
} from './student.controller';
import { updateStudentZodSchema } from './student.validation';

const studentRouter = express.Router();

studentRouter.get('/', getAllStudent);
studentRouter.get('/:id', singleStudent);
studentRouter.patch(
  '/:id',
  validateRequest(updateStudentZodSchema),
  updateStudent
);
studentRouter.delete('/:id', deleteStudent);

export default studentRouter;
