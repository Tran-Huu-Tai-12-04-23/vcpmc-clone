// File: authenticate.action.ts
import { IContractMining } from "../../Model/contractMining.model";

export enum ContractMiningActionType {
  LOAD_CONTRACT_MININGS = "CONTRACT_MINING/LOAD_CONTRACT_MININGS",
  ADD_CONTRACT_MINING = "CONTRACT_MINING/ADD_CONTRACT_MINING",
  REMOVE_CONTRACT_MINING_BY_ID = "CONTRACT_MINING/REMOVE_CONTRACT_MINING_BY_ID",
  CHANGE_CURRENT_CONTRACT_MINING = "CONTRACT_MINING/CHANGE_CURRENT_CONTRACT_MINING",
  LOG_ERROR = "CONTRACT_MINING/LOG_ERROR",
  LOADING = "CONTRACT_MINING/LOADING",
}

interface LoadContractMining {
  type: ContractMiningActionType.LOAD_CONTRACT_MININGS;
  payload: IContractMining[];
}
interface ChangeCurrentContractMining {
  type: ContractMiningActionType.CHANGE_CURRENT_CONTRACT_MINING;
  payload: IContractMining;
}
interface RemoveContractMiningById {
  type: ContractMiningActionType.REMOVE_CONTRACT_MINING_BY_ID;
  payload: string;
}
interface AddContractMining {
  type: ContractMiningActionType.ADD_CONTRACT_MINING;
  payload: IContractMining;
}

interface Loading {
  type: ContractMiningActionType.LOADING;
}
interface LogError {
  type: ContractMiningActionType.LOG_ERROR;
  payload: string;
}

export type ContractMiningAction =
  | LoadContractMining
  | LogError
  | Loading
  | ChangeCurrentContractMining
  | AddContractMining
  | RemoveContractMiningById;
