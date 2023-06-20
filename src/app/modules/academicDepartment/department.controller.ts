import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';

import { academicFacultyFilterFields } from './faculty.constant';
import { IAcademicFaculty } from './faculty.interface';
import {
  academicDeleteService,
  facultyAllService,
  facultyCreateService,
  facultySingleService,
  facultyUpdateService,
} from './faculty.service';

export const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pickPage(req.query, academicFacultyFilterFields);

  const paginationOptions = pickPage(req.query, pickPagination);
  const result = await facultyAllService(filters, paginationOptions);
  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester retrieved successfully',
    data: result.data,
  });
});

export const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...createFaculty } = req.body;
    const result = await facultyCreateService(createFaculty);

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester created successfully',
      data: result,
    });
  }
);

export const academicSingleFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = facultySingleService(id);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result,
    });
  }
);

export const academicUpdateFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = facultyUpdateService(id, updateData);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester updated successfully',
      data: result,
    });
  }
);
export const academicDeleteFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = academicDeleteService(id);
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester delete successfully',
      data: result.data,
    });
  }
);
