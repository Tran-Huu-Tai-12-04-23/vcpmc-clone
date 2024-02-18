// File: authenticate.action.ts
import { IContractAuthority } from "../../Model/contractAuthority.model";

export enum ContractAuthorityActionType {
  LOAD_CONTRACT_AUTHORITY = "CONTRACT_AUTHORITY/LOAD_CONTRACT_AUTHORITY",
  ADD_CONTRACT_AUTHORITY = "CONTRACT_AUTHORITY/ADD_CONTRACT_AUTHORITY",
  REMOVE_CONTRACT_AUTHORITY_BY_ID = "CONTRACT_AUTHORITY/REMOVE_CONTRACT_AUTHORITY_BY_ID",
  CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID = "CONTRACT_AUTHORITY/CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID",
  LOG_ERROR = "CONTRACT_AUTHORITY/LOG_ERROR",
  LOADING = "CONTRACT_AUTHORITY/LOADING",
}

interface LoadContractAuthority {
  type: ContractAuthorityActionType.LOAD_CONTRACT_AUTHORITY;
  payload: IContractAuthority[];
}
interface ChangeCurrentContractAuthority {
  type: ContractAuthorityActionType.CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID;
  payload: IContractAuthority;
}
interface RemoveContractAuthorityById {
  type: ContractAuthorityActionType.REMOVE_CONTRACT_AUTHORITY_BY_ID;
  payload: string;
}
interface AddContractAuthority {
  type: ContractAuthorityActionType.ADD_CONTRACT_AUTHORITY;
  payload: IContractAuthority;
}

interface Loading {
  type: ContractAuthorityActionType.LOADING;
}
interface LogError {
  type: ContractAuthorityActionType.LOG_ERROR;
  payload: string;
}

export type ContractAuthorityAction =
  | LoadContractAuthority
  | LogError
  | Loading
  | ChangeCurrentContractAuthority
  | AddContractAuthority
  | RemoveContractAuthorityById;
