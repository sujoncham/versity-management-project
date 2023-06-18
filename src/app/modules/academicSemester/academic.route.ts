import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import {
  academicSingleSemester,
  academicUpdateSemester,
  createAcademicSem,
  getAllAcademic,
} from './academic.controller';
import {
  createAcademicZodSchema,
  updateAcademicZodSchema,
} from './academic.validation';

const academicRouter = express.Router();

academicRouter.get('/', getAllAcademic);
academicRouter.post(
  '/createAcademicSem',
  validateRequest(createAcademicZodSchema),
  createAcademicSem
);
academicRouter.get('/:id', academicSingleSemester);
academicRouter.patch(
  '/:id',
  validateRequest(updateAcademicZodSchema),
  academicUpdateSemester
);

export default academicRouter;
