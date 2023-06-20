import { SortOrder } from 'mongoose';
import { calculatePagination } from '../../../helpers/paginationHelper';
import {
  IGenericResponse,
  IPaginationOptons,
} from '../../../interfaces/paginationInterface';
import { academicFacultySearchFields } from './faculty.constant';
import { IAcademicFaculty, IAcademicFacultyFilters } from './faculty.interface';
import { default as Faculty } from './faculty.model';

export const facultyCreateService = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const faculty = await Faculty.create(payload);
  return faculty;
};

export const facultyAllService = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptons
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchFields.map(field => ({
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

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Faculty.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Faculty.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const facultySingleService = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await Faculty.findById(id);
  return result;
};

export const facultyUpdateService = async (
  id: string,
  payload: Partial<IAcademicFaculty>
): Promise<IAcademicFaculty | null> => {
  const result = await Faculty.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicDeleteService = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await Faculty.findByIdAndDelete(id);
  return result;
};
