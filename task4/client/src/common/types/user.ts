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
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateStatusParams {
  id: number;
  status: StatusType;
}
