import {
  createAuthorizedPartner,
  deleteAuthorizedPartnerById,
  updateAuthorizedPartnerById,
} from "./../../Service/authorizedPartner.service";
import { Dispatch } from "redux";
import {
  AuthorizedAction,
  AuthorizedPartnerActionType,
} from "../action-types/authorizedPartner.action";
import {
  getAllAuthorizedPartner,
  getAuthorizedPartnerById,
} from "../../Service/authorizedPartner.service";
import { IAuthorizedPartner } from "../../Model/authorizedPartner.model";

export const loadAuthorizedPartner = () => {
  return async (dispatch: Dispatch<AuthorizedAction>) => {
    dispatch({
      type: AuthorizedPartnerActionType.LOADING,
    });

    const res = await getAllAuthorizedPartner();

    if (res === null) return;
    dispatch({
      type: AuthorizedPartnerActionType.LOAD_DATA,
      payload: res,
    });
  };
};

export const changeCurrentAuthorizedPartner = (id: string) => {
  return async (dispatch: Dispatch<AuthorizedAction>) => {
    dispatch({
      type: AuthorizedPartnerActionType.LOADING,
    });

    const res = await getAuthorizedPartnerById(id);

    if (!res) {
      dispatch({
        type: AuthorizedPartnerActionType.LOG_ERROR,
        payload: " Không tìm thấy đối tác ủy quyền!",
      });
      return;
    }
    dispatch({
      type: AuthorizedPartnerActionType.CHANGE_CURRENT_AUTHORIZED_PARTNER,
      payload: res,
    });
  };
};

export const updateAuthorizedPartner = (
  id: string,
  newAuthorizedPartner: IAuthorizedPartner,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<AuthorizedAction>) => {
    dispatch({
      type: AuthorizedPartnerActionType.LOADING,
    });

    const res = await updateAuthorizedPartnerById(id, newAuthorizedPartner);
    if (!res) {
      dispatch({
        type: AuthorizedPartnerActionType.LOG_ERROR,
        payload: "Không thể cập nhật đối tác ủy quyền!",
      });
      return;
    }

    dispatch({
      type: AuthorizedPartnerActionType.CHANGE_CURRENT_AUTHORIZED_PARTNER,
      payload: res,
    });
    onFinish();
  };
};

export const addAuthorizedPartner = (
  newAuthorizedPartner: IAuthorizedPartner,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<AuthorizedAction>) => {
    dispatch({
      type: AuthorizedPartnerActionType.LOADING,
    });
    const res = await createAuthorizedPartner(newAuthorizedPartner);
    if (!res) {
      dispatch({
        type: AuthorizedPartnerActionType.LOG_ERROR,
        payload: "Không thể thêm đối tác ủy quyền!",
      });
      return;
    }

    dispatch({
      type: AuthorizedPartnerActionType.ADD_AUTHORIZED_PARTNER,
      payload: res,
    });
    onFinish();
  };
};

export const removeAuthorizedPartner = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<AuthorizedAction>) => {
    dispatch({
      type: AuthorizedPartnerActionType.LOADING,
    });

    const res = await deleteAuthorizedPartnerById(id);
    if (res === null) {
      dispatch({
        type: AuthorizedPartnerActionType.LOG_ERROR,
        payload: "Không thể xóa đối tác ủy quyền!",
      });
      return;
    }

    dispatch({
      type: AuthorizedPartnerActionType.REMOVE_AUTHORIZED_PARTNER,
      payload: {
        id: id,
      },
    });

    onFinish();
  };
};
