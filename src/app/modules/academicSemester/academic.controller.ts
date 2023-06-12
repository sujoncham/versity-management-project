import { RequestHandler } from 'express';
import { pickPagination } from '../../../constants/paginationsPick';
import { pickPage } from '../../../shared/pickPage';
import { academicAllService, academicCreateService } from './academic.service';

export const getAllAcademic: RequestHandler = async (req, res, next) => {
  try {
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.sortBy,
    //   sortOrder: req.query.sortOrder,
    // };

    const paginationOptions = pickPage(req.query, pickPagination);

    const result = await academicAllService(paginationOptions);
    res.status(200).json({
      status: 'success',
      message: 'Semester retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const createAcademicSem: RequestHandler = async (req, res, next) => {
  try {
    const { ...createAcademic } = req.body;
    const result = await academicCreateService(createAcademic);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
