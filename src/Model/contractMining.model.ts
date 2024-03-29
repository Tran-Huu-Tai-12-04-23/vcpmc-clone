import { Dayjs } from "dayjs";

export enum statusContractMining {
  IS_NEW = 0,
  IS_EFFECT = 1,
  IS_EXPIRE = 2,
  IS_CANCELLED = 3,
}

export enum typeContract {
  ALL_IN_ONE = "trọn gói",
  PLAYS = "Lượt phát",
}
export enum typeGender {
  MALE = "Nam",
  FEMALE = "Nữ",
}
export enum typeRole {
  ADMIN = "Admin",
  USER = "user",
  SUPER_ADMIN = "Super Admin",
  GROUP_ADMIN = "Group Admin",
  SUB_USER = "Sub User",
  CONTENT_MANAGER = "Content Manager",
}
export type File = {
  name: string;
  link: string;
  type: string;
};
export interface IContractMining {
  id?: string;
  key?: string;
  nameContract: string;
  numberContract: string;
  customer: string;
  createAt: Dayjs;
  dateEffect: Dayjs;
  expireDate: Dayjs;
  status: statusContractMining;
  file: File[];
  typeContract: typeContract;
  valueContract: number;
  valuePlay: number;
  valueDistribute: number;
  username: string;
  password: string;
  numberAccount: string;
  nameBank: string;
  CMND_CCCD: string;
  dateAllocated: Dayjs;
  placeAllocated: string;
  taxNumber?: string;
  residence?: string;
  gender: typeGender;
  email: string;
  phoneNumber?: string;
  nationality?: string;
  birthDay: Dayjs;
  role?: typeRole;
  representative: string;
  nameOfUnitUsed: string;
}
export interface IContractMiningState {
  loading: boolean;
  error?: string | undefined;
  contractMinings: IContractMining[];
  currentContractMining: IContractMining | null;
}
