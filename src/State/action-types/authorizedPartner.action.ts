import { IAuthorizedPartner } from "./../../Model/authorizedPartner.model";

export enum AuthorizedPartnerActionType {
  LOAD_DATA = "AUTHORIZED_PARTNER/LOAD_DATA",
  UPDATE_AUTHORIZED_PARTNER = "AUTHORIZED_PARTNER/UPDATE_AUTHORIZED_PARTNER",
  ADD_AUTHORIZED_PARTNER = "AUTHORIZED_PARTNER/ADD_AUTHORIZED_PARTNER",
  LOADING = "AUTHORIZED_PARTNER/LOADING",
  LOG_ERROR = "AUTHORIZED_PARTNER/LOG_ERROR",
  REMOVE_AUTHORIZED_PARTNER = "AUTHORIZED_PARTNER/REMOVE_AUTHORIZED_PARTNER",
  CHANGE_CURRENT_AUTHORIZED_PARTNER = "AUTHORIZED_PARTNER/CHANGE_CURRENT_AUTHORIZED_PARTNER",
}

interface LoadDataAction {
  type: AuthorizedPartnerActionType.LOAD_DATA;
  payload: IAuthorizedPartner[];
}
interface RemoveAuthorizedPartnerAction {
  type: AuthorizedPartnerActionType.REMOVE_AUTHORIZED_PARTNER;
  payload: {
    id: string;
  };
}
interface ChangeCurrentAuthorizedPartnerAction {
  type: AuthorizedPartnerActionType.CHANGE_CURRENT_AUTHORIZED_PARTNER;
  payload: IAuthorizedPartner | null;
}

interface UpdateAuthorizedPartnerAction {
  type: AuthorizedPartnerActionType.UPDATE_AUTHORIZED_PARTNER;
  payload: IAuthorizedPartner;
}
interface AddAuthorizedPartnerAction {
  type: AuthorizedPartnerActionType.ADD_AUTHORIZED_PARTNER;
  payload: IAuthorizedPartner;
}

interface LoadingAction {
  type: AuthorizedPartnerActionType.LOADING;
}

interface LogErrorAction {
  type: AuthorizedPartnerActionType.LOG_ERROR;
  payload: string;
}

export type AuthorizedAction =
  | LoadDataAction
  | UpdateAuthorizedPartnerAction
  | LoadingAction
  | LogErrorAction
  | AddAuthorizedPartnerAction
  | RemoveAuthorizedPartnerAction
  | ChangeCurrentAuthorizedPartnerAction;
