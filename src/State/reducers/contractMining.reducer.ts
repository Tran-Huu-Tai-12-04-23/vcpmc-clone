import { IContractMiningState } from "../../Model/contractMining.model";
import {
  ContractMiningAction,
  ContractMiningActionType,
} from "../action-types/contractMining.action";

const initialState: IContractMiningState = {
  loading: false,
  contractMinings: [],
  currentContractMining: null,
  error: undefined,
};

export const contractMiningReducer = (
  state = initialState,
  action: ContractMiningAction,
) => {
  switch (action.type) {
    case ContractMiningActionType.LOAD_CONTRACT_MININGS: {
      return {
        ...state,
        loading: false,
        contractMinings: action.payload,
        error: undefined,
      };
    }
    case ContractMiningActionType.ADD_CONTRACT_MINING: {
      return {
        ...state,
        loading: false,
        contractMinings: [...(state.contractMinings ?? []), action.payload],
        error: undefined,
      };
    }
    case ContractMiningActionType.CHANGE_CURRENT_CONTRACT_MINING: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentContractMining: action.payload,
      };
    }
    case ContractMiningActionType.REMOVE_CONTRACT_MINING_BY_ID: {
      return {
        ...state,
        loading: false,
        error: undefined,
        playlists: state.contractMinings.filter(
          (ct) => ct.id !== action.payload,
        ),
      };
    }

    case ContractMiningActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case ContractMiningActionType.LOG_ERROR: {
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
