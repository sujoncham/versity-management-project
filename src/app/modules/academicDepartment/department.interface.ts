import mongoose, { Model } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export interface IAcademicDepartment {
  title: string;
  facultyId?: mongoose.Schema.Types.ObjectId | IAcademicFaculty;
}

export type AcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>;

export interface IAcademicDepartmentFilters {
  searchTerm?: string;
  facultyId?: mongoose.Schema.Types.ObjectId;
}
