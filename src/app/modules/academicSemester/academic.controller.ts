import { RequestHandler } from 'express';
import AcademicSem from './academic.model';
import { academicService } from './academic.service';

export const getAllAcademic: RequestHandler = async (req, res, next) => {
  try {
    const users = await AcademicSem.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const createAcademicSem: RequestHandler = async (req, res, next) => {
  try {
    const { ...createAcademic } = req.body;
    const result = await academicService(createAcademic);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
