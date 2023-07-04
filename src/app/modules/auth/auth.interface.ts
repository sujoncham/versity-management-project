import { ENUM_USER_ROLE } from '../../../enums/user';

export interface ILoginUser {
  id: string;
  password: string;
}

export interface ILoginUserResponse {
  accessToken: string;
  refreshToken?: string;
  needsPasswordChange: boolean;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}

export interface IVerifiedLoginUser {
  userId: string;
  role: ENUM_USER_ROLE;
}
