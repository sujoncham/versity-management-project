import { ZodError, ZodIssue } from 'zod';
import { ICommonResponse } from '../interfaces/commonErrors';
import { IErrorMessage } from '../interfaces/errors';

const handleZodError = (error: ZodError): ICommonResponse => {
  const errors: IErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;
