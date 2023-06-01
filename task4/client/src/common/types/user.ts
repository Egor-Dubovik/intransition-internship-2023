export type StatusType = 'active' | 'blocked';

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IRegistrationParams extends ILoginParams {
  name: string;
}

export interface IUser extends IRegistrationParams {
  id: number;
  status: StatusType;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateStatusParams {
  id: number;
  status: StatusType;
}

export interface IDeleteResponse {
  isDeleted: boolean;
  id?: number;
}
