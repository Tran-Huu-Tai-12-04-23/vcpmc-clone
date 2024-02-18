import { Dayjs } from "dayjs";
import { IUserDetail } from "./user.model";
import { File, typeGender } from "./contractMining.model";

export interface IContractAuthority {
  id?: string;
  key?: string;
}
export interface IContractAuthorityState {
  loading: boolean;
  error?: string | undefined;
  contractAuthorities: IContractAuthority[];
  currentContractAuthority: IContractAuthority | null;
}

export enum statusContractAuthority {
  IS_NEW = 0,
  IS_EFFECT = 1,
  IS_EXPIRE = 2,
  IS_CANCELLED = 3,
}

export enum typeAuthorizedLegalEntity {
  PERSONAL = "PERSONAL",
  ORGANIZATION = "ORGANIZATION",
}

export interface IContractAuthority {
  id?: string;
  key?: string;
  nameContract: string;
  numberContract: string;
  customer: string;
  createAt: Dayjs;
  dateEffect: Dayjs;
  expireDate: Dayjs;
  status: statusContractAuthority;
  file: File[];
  authorizedLegalEntity: typeAuthorizedLegalEntity;
  personAuthority: IUserDetail;
  CMND_CCCD: string;
  dateAllocated: Dayjs;
  placeAllocated: string;
  taxNumber?: string;
  residence?: string;
  username: string;
  password: string;
  nameBank: string;
  numberAccount: string;
  email?: string;
  nationality: string;
  gender: typeGender;
}
