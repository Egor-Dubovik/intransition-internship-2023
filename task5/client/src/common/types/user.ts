export interface IUserData {
  id?: string;
  fullName: string;
  address: string;
  phone: string;
}

export interface IUserParams {
  locale: string;
  seed: string;
  page: number;
  errorCount: string;
}

export interface IUserByAmountParams extends IUserParams {
  pageAmount: number;
}
