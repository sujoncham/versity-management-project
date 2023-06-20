import mongoose from 'mongoose';

import { AcademicFacultyModel, IAcademicFaculty } from './faculty.interface';

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

const Faculty = mongoose.model<IAcademicFaculty, AcademicFacultyModel>(
  'Faculty',
  facultySemSchema
);
export default Faculty;
