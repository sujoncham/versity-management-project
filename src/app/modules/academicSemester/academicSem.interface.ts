import { Model } from 'mongoose';
export type AcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type AcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type AcademicSemesterCode = '01' | '02' | '03';

export interface IAcademicSemester {
  data: IAcademicSemester | null | undefined;
  meta:
    | {
        page?: number | undefined;
        limit?: number | undefined;
        total?: number | undefined;
      }
    | undefined;
  title: AcademicSemesterTitle;
  year: string;
  code: AcademicSemesterCode;
  startMonth: AcademicSemesterMonth;
  endMonth: AcademicSemesterMonth;
}

export type AcademicSemesterModel = Model<IAcademicSemester>;

export interface IAcademicFilters {
  searchTerm?: string;
}
