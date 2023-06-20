import mongoose from 'mongoose';

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
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
  }
);

facultySemSchema.pre('save', async function (next) {
  const isExist = await Faculty.findOne({
    title: this.title,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist!'
    );
  }
  next();
});

const Faculty = mongoose.model<IAcademicFaculty, AcademicFacultyModel>(
  'Faculty',
  facultySemSchema
);
export default Faculty;
