import { Dispatch } from "redux";

import {
  ContractMiningAction,
  ContractMiningActionType,
} from "../action-types/contractMining.action";
import {
  AddContractMiningResponseType,
  ContractMiningResponseType,
  getContractMinings,
  addContractMining as add,
  getContractMiningById,
  removeContractMiningById,
  updateContractMiningById,
} from "../../Service/contractMining.service";
import { IContractMining } from "../../Model/contractMining.model";

export const loadContractMining = () => {
  return async (dispatch: Dispatch<ContractMiningAction>) => {
    dispatch({
      type: ContractMiningActionType.LOADING,
    });

    const res: ContractMiningResponseType | null = await getContractMinings();

    if (res === null || res.data === null) return;
    dispatch({
      type: ContractMiningActionType.LOAD_CONTRACT_MININGS,
      payload: res.data ? res.data : [],
    });
  };
};

export const addContractMining = (
  newContractMining: IContractMining,
  onFinish?: () => void,
) => {
  return async (dispatch: Dispatch<ContractMiningAction>) => {
    dispatch({
      type: ContractMiningActionType.LOADING,
    });

    const res: AddContractMiningResponseType | null =
      await add(newContractMining);

    if (res === null || res.data === null) return;
    dispatch({
      type: ContractMiningActionType.ADD_CONTRACT_MINING,
      payload: res.data,
    });
    onFinish && onFinish();
  };
};

export const changeCurrentContractMining = (id: string) => {
  return async (dispatch: Dispatch<ContractMiningAction>) => {
    dispatch({
      type: ContractMiningActionType.LOADING,
    });

    const res: IContractMining | null = await getContractMiningById(id);

    if (res === null) {
      return;
    }
    dispatch({
      type: ContractMiningActionType.CHANGE_CURRENT_CONTRACT_MINING,
      payload: res,
    });
  };
};

export const removeContractMining = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<ContractMiningAction>) => {
    dispatch({
      type: ContractMiningActionType.LOADING,
    });

    const res: boolean = await removeContractMiningById(id);

    if (res) {
      dispatch({
        type: ContractMiningActionType.REMOVE_CONTRACT_MINING_BY_ID,
        payload: id,
      });
      onFinish();
      return;
    }
  };
};
export const updateContractMining = (
  id: string,
  newContractMining: IContractMining,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<ContractMiningAction>) => {
    dispatch({
      type: ContractMiningActionType.LOADING,
    });
    const res: IContractMining | null = await updateContractMiningById(
      id,
      newContractMining,
    );
    if (res === null) {
      return;
    }
    dispatch({
      type: ContractMiningActionType.CHANGE_CURRENT_CONTRACT_MINING,
      payload: res,
    });
    onFinish();
  };
};
