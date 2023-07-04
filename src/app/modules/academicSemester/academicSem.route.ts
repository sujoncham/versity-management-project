import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import {
  academicDeleteSemester,
  academicSingleSemester,
  academicUpdateSemester,
  createAcademicSem,
  getAllAcademic,
} from './academicSem.controller';
import {
  createAcademicZodSchema,
  updateAcademicZodSchema,
} from './academicSem.validation';

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
academicRouter.delete(
  '/:id',
  validateRequest(updateAcademicZodSchema),
  academicDeleteSemester
);

export default academicRouter;