import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/department.interface';
import { IAcademicFaculty } from '../academicFaculty/faculty.interface';
import { IAcademicSemester } from '../academicSemester/academic.interface';

export interface IStudent {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  profileImage?: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    contactNo: string;
    motherName: string;
    motherOccupation: string;
    address: string;
  };
  localGuardian: {
    guardianName: string;
    occupation: string;
    contactNo: string;
    address: string;
  };
  academicId: Types.ObjectId | IAcademicSemester;
  facultyId: Types.ObjectId | IAcademicFaculty;
  departmentId: Types.ObjectId | IAcademicDepartment;
}

export type StudentModel = Model<IStudent, Record<string, unknown>>;
