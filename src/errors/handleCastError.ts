import mongoose from 'mongoose';
import { IErrorMessage } from '../interfaces/errors';

export const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessage: errors,
  };
};
