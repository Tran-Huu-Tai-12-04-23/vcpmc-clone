import { Dayjs } from "dayjs";
import { typeRole } from "./contractMining.model";

export interface IUserDetail {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Dayjs;
  role?: typeRole;
  userId: string;
  nationality?: string;
}
