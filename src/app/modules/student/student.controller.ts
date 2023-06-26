import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';

import {
  departmentAllService,
  departmentCreateService,
  departmentDeleteService,
  departmentSingleService,
  departmentUpdateService,
} from './department.service';
import { studentFilterableFields } from './student.constant';
import { IStudent } from './student.interface';

export const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pickPage(req.query, studentFilterableFields);

  const paginationOptions = pickPage(req.query, pickPagination);
  const result = await departmentAllService(filters, paginationOptions);
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrieved successfully',
    data: result.data,
  });
});

export const createAcademicStudent = catchAsync(
  async (req: Request, res: Response) => {
    const { ...createFaculty } = req.body;
    const result = await departmentCreateService(createFaculty);

    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester created successfully',
      data: result,
    });
  }
);

export const academicSingleStudent = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = departmentSingleService(id);
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result,
    });
  }
);

export const academicUpdateStudent = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = departmentUpdateService(id, updateData);
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester updated successfully',
      data: result,
    });
  }
);
export const academicDeleteStudent = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = departmentDeleteService(id);
    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester delete successfully',
      data: result.data,
    });
  }
);
