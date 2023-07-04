import mongoose from 'mongoose';

import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface';

const facultySemSchema = new mongoose.Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const AcademicFaculty = mongoose.model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  facultySemSchema
);
export default AcademicFaculty;
