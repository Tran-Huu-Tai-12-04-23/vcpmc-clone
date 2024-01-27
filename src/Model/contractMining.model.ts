import { Dayjs } from "dayjs";

export enum statusContractMining {
  IS_NEW = 0,
  IS_EFFECT = 1,
  IS_EXPIRE = 2,
  IS_CANCELLED = 3,
}

export enum typeContract {
  ALL_IN_ONE = "trọn gói",
}
export type File = {
  name: string;
  link: string;
  type: string;
};
export interface IContractMining {
  id?: string;
  key?: string;
  numberContract: string;
  customer: string;
  createAt: Dayjs;
  dayApply: Dayjs;
  expireDate: string;
  status: statusContractMining;
  file: File[];
  typeContract: typeContract;
  value: number;
}
export interface IContractMiningState {
  loading: boolean;
  error?: string | undefined;
  contractAuthorities: IContractMining[];
  currentContractAuthority: IContractMining | null;
}
