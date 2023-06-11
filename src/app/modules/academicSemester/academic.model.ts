import mongoose from 'mongoose';

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  academicConstantMonth,
  academicSemesterCode,
  academicSemesterTitle,
} from './academic.constant';
import { AcademicSemesterModel, IAcademicSemester } from './academic.interface';

const academicSemSchema = new mongoose.Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicConstantMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicConstantMonth,
    },
  },
  {
    timestamps: true,
  }
);

academicSemSchema.pre('save', async function (next) {
  const isExist = await AcademicSem.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist!'
    );
  }
  next();
});

const AcademicSem = mongoose.model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSem',
  academicSemSchema
);
export default AcademicSem;
