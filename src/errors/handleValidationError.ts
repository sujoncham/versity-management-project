import mongoose from 'mongoose';
import { ICommonResponse } from '../interfaces/commonErrors';
import { IErrorMessage } from '../interfaces/errors';

const handleValidationError = (
  error: mongoose.Error.ValidationError
): ICommonResponse => {
  const errors: IErrorMessage[] = Object.values(error.errors).map(
    (elem: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: elem?.path,
        message: elem?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleValidationError;
