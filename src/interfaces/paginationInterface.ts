export interface IPaginationOptons {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface IGenericResponse<T> {
  meta: {
    page?: number;
    limit?: number;
    total?: number;
  };
  data: T;
}
