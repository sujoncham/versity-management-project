import { IErrorMessage } from './errors';

export interface ICommonResponse {
  statusCode: number;
  message: string;
  errorMessage: IErrorMessage[];
}
