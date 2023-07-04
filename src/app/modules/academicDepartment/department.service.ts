import { SortOrder } from 'mongoose';
import { calculatePagination } from '../../../helpers/paginationHelper';
import {
  IGenericResponse,
  IPaginationOptions,
} from '../../../interfaces/paginationInterface';
import { academicDepartmentSearchFields } from './department.constant';
import {
  IAcademicDepartment,
  IAcademicDepartmentFilters,
} from './department.interface';
import Department from './department.model';

export const departmentCreateService = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment> => {
  const faculty = await Department.create(payload);
  return faculty;
};

export const departmentAllService = async (
  filters: IAcademicDepartmentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicDepartment[]>> => {
  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: academicDepartmentSearchFields.map(field => ({
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

  const result = await Department.find(whereCondition)
    .populate('facultyId')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await Department.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const departmentSingleService = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await Department.findById(id);
  return result;
};

export const departmentUpdateService = async (
  id: string,
  payload: Partial<IAcademicDepartment>
): Promise<IAcademicDepartment | null> => {
  const result = await Department.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const departmentDeleteService = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await Department.findByIdAndDelete(id);
  return result;
};
