import { z } from 'zod';
import {
  academicConstantMonth,
  academicSemesterCode,
  academicSemesterTitle,
} from './academic.constant';
export const createAcademicZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'code is required',
    }),
    startMonth: z.enum([...academicConstantMonth] as [string, ...string[]], {
      required_error: 'startMonth is required',
    }),
    endMonth: z.enum([...academicConstantMonth] as [string, ...string[]], {
      required_error: 'endMonth is required',
    }),
  }),
});
