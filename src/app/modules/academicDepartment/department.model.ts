import mongoose from 'mongoose';

import {
  AcademicDepartmentModel,
  IAcademicDepartment,
} from './department.interface';

const departmentSemSchema = new mongoose.Schema<IAcademicDepartment>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    facultyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Faculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Department = mongoose.model<IAcademicDepartment, AcademicDepartmentModel>(
  'Department',
  departmentSemSchema
);
export default Department;
