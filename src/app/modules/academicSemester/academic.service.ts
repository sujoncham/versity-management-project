import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicTitleCodeMapper } from './academic.constant';
import { IAcademicSemester } from './academic.interface';
import AcademicSem from './academic.model';

export const academicService = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const academic = await AcademicSem.create(payload);
  return academic;
};
