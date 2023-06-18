import { Response } from 'express';
export interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page?: number | undefined;
    limit?: number | undefined;
    total?: number | undefined;
  };
  data?: T | null | undefined;
}
export const sendResponse = <T>(
  res: Response,
  data: ISendResponse<T>
): void => {
  const responseData: ISendResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};
