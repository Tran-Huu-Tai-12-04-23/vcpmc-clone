import { IContractAuthorityState } from "../../Model/contractAuthority.model";
import {
  ContractAuthorityAction,
  ContractAuthorityActionType,
} from "../action-types/contractAuthority.action";

const initialState: IContractAuthorityState = {
  loading: false,
  contractAuthorities: [],
  currentContractAuthority: null,
  error: undefined,
};

export const contractAuthorityReducer = (
  state = initialState,
  action: ContractAuthorityAction,
) => {
  switch (action.type) {
    case ContractAuthorityActionType.LOAD_CONTRACT_AUTHORITY: {
      return {
        ...state,
        loading: false,
        contractAuthorities: action.payload,
        error: undefined,
      };
    }
    case ContractAuthorityActionType.ADD_CONTRACT_AUTHORITY: {
      return {
        ...state,
        loading: false,
        contractAuthorities: [
          ...(state.contractAuthorities ?? []),
          action.payload,
        ],
        error: undefined,
      };
    }
    case ContractAuthorityActionType.CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentContractAuthority: action.payload,
      };
    }
    case ContractAuthorityActionType.REMOVE_CONTRACT_AUTHORITY_BY_ID: {
      return {
        ...state,
        loading: false,
        error: undefined,
        playlists: state.contractAuthorities.filter(
          (ct) => ct.id !== action.payload,
        ),
      };
    }

    case ContractAuthorityActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case ContractAuthorityActionType.LOG_ERROR: {
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
