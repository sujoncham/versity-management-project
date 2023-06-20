import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';

import { academicDepartmentFilterFields } from './department.constant';
import { IAcademicDepartment } from './department.interface';
import {
  departmentAllService,
  departmentCreateService,
  departmentDeleteService,
  departmentSingleService,
  departmentUpdateService,
} from './department.service';

export const getAllDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pickPage(req.query, academicDepartmentFilterFields);

    const paginationOptions = pickPage(req.query, pickPagination);
    const result = await departmentAllService(filters, paginationOptions);
    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result.data,
    });
  }
);

export const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...createFaculty } = req.body;
    const result = await departmentCreateService(createFaculty);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester created successfully',
      data: result,
    });
  }
);

export const academicSingleDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = departmentSingleService(id);
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result,
    });
  }
);

export const academicUpdateDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = departmentUpdateService(id, updateData);
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester updated successfully',
      data: result,
    });
  }
);
export const academicDeleteDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = departmentDeleteService(id);
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester delete successfully',
      data: result.data,
    });
  }
);
