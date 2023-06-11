import mongoose from 'mongoose';
import { IErrorMessage } from '../interfaces/errors';

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IErrorMessage[] = Object.values(err.errors).map(
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
