import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';

import { studentFilterableFields } from './student.constant';
import { IStudent } from './student.interface';
import {
  studentAllService,
  studentDeleteService,
  studentSingleService,
  studentUpdateService,
} from './student.service';

export const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pickPage(req.query, studentFilterableFields);

  const paginationOptions = pickPage(req.query, pickPagination);

  const result = await studentAllService(filters, paginationOptions);

  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrieved successfully',
    data: result.data,
  });
});

export const singleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await studentSingleService(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrieved successfully',
    data: result,
  });
});

export const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await studentUpdateService(id, updateData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester updated successfully',
    data: result,
  });
});
export const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await studentDeleteService(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester delete successfully',
    data: result,
  });
});
