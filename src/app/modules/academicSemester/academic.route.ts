import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import { createAcademicSem, getAllAcademic } from './academic.controller';
import { createAcademicZodSchema } from './academic.validation';

const academicRouter = express.Router();

academicRouter.get('/', getAllAcademic);
academicRouter.post(
  '/createAcademicSem',
  validateRequest(createAcademicZodSchema),
  createAcademicSem
);

export default academicRouter;
