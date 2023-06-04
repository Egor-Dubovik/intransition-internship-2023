export interface IUserData {
  id?: string;
  fullName: string;
  address: string;
  phone: string;
}

export interface IFakeDataParams {
  locale: string;
  page: number;
  seed: number;
  errorCount: number;
}
