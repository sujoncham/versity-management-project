import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';
import { IAcademicSemester } from './academic.interface';
import {
  academicAllService,
  academicCreateService,
  academicDeleteService,
  academicSingleService,
  academicUpdateService,
} from './academic.service';

export const getAllAcademic = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pickPage(req.query, [
      'searchTerm',
      'title',
      'year',
      'code',
    ]);

    const paginationOptions = pickPage(req.query, pickPagination);
    const result = await academicAllService(filters, paginationOptions);
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const createAcademicSem = catchAsync(
  async (req: Request, res: Response) => {
    const { ...createAcademic } = req.body;
    const result = await academicCreateService(createAcademic);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester created successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const academicSingleSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = academicSingleService(id);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result.data,
    });
  }
);

export const academicUpdateSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = academicUpdateService(id, updateData);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester updated successfully',
      data: result.data,
    });
  }
);
export const academicDeleteSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = academicDeleteService(id);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester delete successfully',
      data: result.data,
    });
  }
);
