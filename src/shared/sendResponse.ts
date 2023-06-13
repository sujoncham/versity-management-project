import { Response } from 'express';
interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
}
export const sendResponse = <T>(
  res: Response,
  data: ISendResponse<T>
): void => {
  const responseData: ISendResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};
