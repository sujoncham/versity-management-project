import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { pickPagination } from '../../../constants/paginationsPick';
import { catchAsync } from '../../../shared/catchAsync';
import { pickPage } from '../../../shared/pickPage';
import { sendResponse } from '../../../shared/sendResponse';
import { academicAllService, academicCreateService } from './academic.service';

export const getAllAcademic = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pickPage(req.query, pickPagination);
    const result = await academicAllService(paginationOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester retrieved successfully',
      data: result,
    });

    next();
  }
);

export const createAcademicSem = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...createAcademic } = req.body;
    const result = await academicCreateService(createAcademic);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semester created successfully',
      data: result,
    });
    next();
  }
);
