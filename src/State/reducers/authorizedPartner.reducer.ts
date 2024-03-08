import { IAuthorizedPartner } from "../../Model/authorizedPartner.model";
import {
  AuthorizedAction,
  AuthorizedPartnerActionType,
} from "../action-types/authorizedPartner.action";

export type IAuthorizedPartnerState = {
  authorizedPartners: IAuthorizedPartner[];
  currentAuthorizedPartner: IAuthorizedPartner | null;
  loading: boolean;
  error: string | undefined;
};
const initialState: IAuthorizedPartnerState = {
  authorizedPartners: [],
  currentAuthorizedPartner: null,
  loading: false,
  error: undefined,
};

export const authorizedPartnerReducer = (
  state = initialState,
  action: AuthorizedAction,
) => {
  switch (action.type) {
    case AuthorizedPartnerActionType.LOAD_DATA: {
      return {
        ...state,
        loading: false,
        error: undefined,
        authorizedPartners: action.payload,
      };
    }
    case AuthorizedPartnerActionType.UPDATE_AUTHORIZED_PARTNER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        authorizedPartners: state.authorizedPartners.map((device) =>
          device.id === action.payload.id ? action.payload : device,
        ),
      };
    }
    case AuthorizedPartnerActionType.ADD_AUTHORIZED_PARTNER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentAuthorizedPartner: action.payload,
      };
    }
    case AuthorizedPartnerActionType.REMOVE_AUTHORIZED_PARTNER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        authorizedPartners: state.authorizedPartners.filter(
          (device) => device.id !== action.payload.id,
        ),
      };
    }
    case AuthorizedPartnerActionType.CHANGE_CURRENT_AUTHORIZED_PARTNER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentAuthorizedPartner: action.payload,
      };
    }
    case AuthorizedPartnerActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case AuthorizedPartnerActionType.LOG_ERROR: {
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
