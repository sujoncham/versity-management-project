import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/department.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export interface UserName {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IFaculty {
  id: string;
  name: UserName;
  profileImage: string;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender?: 'male' | 'female';
  permanentAddress?: string;
  presentAddress?: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  designation: string;
}

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;

export interface IFacultyFilters {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  academicDepartment?: string;
  academicFaculty?: string;
  designation?: string;
}
