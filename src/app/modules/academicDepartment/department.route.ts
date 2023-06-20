import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';

import {
  academicDeleteDepartment,
  academicSingleDepartment,
  academicUpdateDepartment,
  createAcademicDepartment,
  getAllDepartment,
} from './department.controller';
import { createDepartmentZodSchema } from './department.validation';

const departmentRouter = express.Router();

departmentRouter.get('/', getAllDepartment);
departmentRouter.post(
  '/createDepartment',
  validateRequest(createDepartmentZodSchema),
  createAcademicDepartment
);
departmentRouter.get('/:id', academicSingleDepartment);
departmentRouter.patch(
  '/:id',
  validateRequest(createDepartmentZodSchema),
  academicUpdateDepartment
);
departmentRouter.delete('/:id', academicDeleteDepartment);

export default departmentRouter;
