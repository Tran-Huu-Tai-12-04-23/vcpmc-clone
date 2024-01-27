import { Dayjs } from "dayjs";
import { IRecord } from "./record.model";

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
