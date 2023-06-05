export interface IUserData {
  id: string;
  fullName: string;
  address: string;
  phone: string;
}

export interface IFakeParams {
  locale: string;
  seed: number;
  errorCount: number;
}

export interface IFakeDataParams extends IFakeParams {
  page: number;
}

export interface IFakeDataArrayParams extends IFakeParams {
  pageAmount: string;
}
