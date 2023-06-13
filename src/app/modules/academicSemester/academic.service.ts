import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicTitleCodeMapper } from './academic.constant';
import {
  IAcademicSemester,
  IGenericResponse,
  IPaginationOptons,
} from './academic.interface';
import AcademicSem from './academic.model';

export const academicCreateService = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const academic = await AcademicSem.create(payload);
  return academic;
};

export const academicAllService = async (
  paginationOptions: IPaginationOptons
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;
  const result = await AcademicSem.find().sort().skip(skip).limit(limit);
  const total = await AcademicSem.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
