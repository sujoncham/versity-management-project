import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { calculatePagination } from '../../../helpers/paginationHelper';
import {
  IGenericResponse,
  IPaginationOptons,
} from '../../../interfaces/paginationInterface';
import { academicTitleCodeMapper } from './academic.constant';
import { IAcademicFilters, IAcademicSemester } from './academic.interface';
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
  filters: IAcademicFilters,
  paginationOptions: IPaginationOptons
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;
  const { searchTerm, ...filtersData } = filters;
  const academicSearchFields = ['title', 'code', 'year'];

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: academicSearchFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           options: 'i',
  //         },
  //       },
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicSem.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
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

export const academicSingleService = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSem.findById(id);
  return result;
};

export const academicUpdateService = async (
  id: string,
  payload: Partial<IAcademicSemester>
): Promise<IAcademicSemester | null> => {
  if (
    payload.title &&
    payload.code &&
    academicTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const result = await AcademicSem.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicDeleteService = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSem.findByIdAndDelete(id);
  return result;
};
