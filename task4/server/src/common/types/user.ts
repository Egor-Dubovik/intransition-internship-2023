export type StatusType = "active" | "blocked";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  status?: StatusType;
  createdAt?: Date;
  updatedAt?: Date;
}
