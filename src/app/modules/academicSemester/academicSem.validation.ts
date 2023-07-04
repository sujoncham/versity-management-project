import { z } from 'zod';
import {
  academicConstantMonth,
  academicSemesterCode,
  academicSemesterTitle,
} from './academicSem.constant';
export const createAcademicZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string({
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
export const updateAcademicZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitle] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z
        .string({
          required_error: 'year is required',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCode] as [string, ...string[]], {
          required_error: 'code is required',
        })
        .optional(),
      startMonth: z
        .enum([...academicConstantMonth] as [string, ...string[]], {
          required_error: 'startMonth is required',
        })
        .optional(),
      endMonth: z
        .enum([...academicConstantMonth] as [string, ...string[]], {
          required_error: 'endMonth is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );
