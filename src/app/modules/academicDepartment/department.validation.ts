import { z } from 'zod';
export const createDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    facultyId: z.string({
      required_error: 'Department is required',
    }),
  }),
});
export const updateDepartmentZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    facultyId: z
      .string({
        required_error: 'Department is required',
      })
      .optional(),
  }),
});
