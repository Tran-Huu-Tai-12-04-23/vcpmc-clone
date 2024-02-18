import { Dispatch } from "redux";
import {
  ContractAuthorityAction,
  ContractAuthorityActionType,
} from "../action-types/contractAuthority.action";
import {
  AddContractAuthorityResponseType,
  ContractAuthorityResponseType,
  getContractAuthorities,
  addContractAuthority as add,
  getContractAuthorityById,
  removeContractAuthorityById,
  updateContractAuthorityById,
} from "../../Service/contractAuthority.service";
import { IContractAuthority } from "../../Model/contractAuthority.model";

export const loadContractAuthorities = () => {
  return async (dispatch: Dispatch<ContractAuthorityAction>) => {
    dispatch({
      type: ContractAuthorityActionType.LOADING,
    });

    const res: ContractAuthorityResponseType | null =
      await getContractAuthorities();

    if (res === null || res.data === null) return;
    dispatch({
      type: ContractAuthorityActionType.LOAD_CONTRACT_AUTHORITY,
      payload: res.data ? res.data : [],
    });
  };
};

export const addContractAuthority = (
  newContractAuthority: IContractAuthority,
  onFinish?: () => void,
) => {
  return async (dispatch: Dispatch<ContractAuthorityAction>) => {
    dispatch({
      type: ContractAuthorityActionType.LOADING,
    });
    console.log({
      ...newContractAuthority,
      nameContract: newContractAuthority.nameContract,
      numberContract: newContractAuthority.numberContract,
      customer: newContractAuthority.customer,
      dateEffect: newContractAuthority.dateEffect.toString(),
      expireDate: newContractAuthority.expireDate.toString(),
      status: newContractAuthority.status,
      file: newContractAuthority.file,
      username: newContractAuthority.username,
      password: newContractAuthority.password,
      numberAccount: newContractAuthority.numberAccount,
      nameBank: newContractAuthority.nameBank,
      CMND_CCCD: newContractAuthority.CMND_CCCD,
      dateAllocated: newContractAuthority.dateAllocated.toString(),
      placeAllocated: newContractAuthority.placeAllocated,
      email: newContractAuthority.email,
      authorizedLegalEntity: newContractAuthority.authorizedLegalEntity,
      personAuthority: newContractAuthority.personAuthority,
      nationality: newContractAuthority.nationality.toString(),
    });
    const res: AddContractAuthorityResponseType | null =
      await add(newContractAuthority);

    if (res === null || res.data === null) return;
    dispatch({
      type: ContractAuthorityActionType.ADD_CONTRACT_AUTHORITY,
      payload: res.data,
    });
    onFinish && onFinish();
  };
};

export const changeCurrentContractAuthority = (id: string) => {
  return async (dispatch: Dispatch<ContractAuthorityAction>) => {
    dispatch({
      type: ContractAuthorityActionType.LOADING,
    });

    const res: IContractAuthority | null = await getContractAuthorityById(id);

    if (res === null) {
      return;
    }
    dispatch({
      type: ContractAuthorityActionType.CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID,
      payload: res,
    });
  };
};

export const removeContractAuthority = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<ContractAuthorityAction>) => {
    dispatch({
      type: ContractAuthorityActionType.LOADING,
    });

    const res: boolean = await removeContractAuthorityById(id);

    if (res) {
      dispatch({
        type: ContractAuthorityActionType.REMOVE_CONTRACT_AUTHORITY_BY_ID,
        payload: id,
      });
      onFinish();
      return;
    }
  };
};
export const updateContractAuthority = (
  id: string,
  newContractAuthority: IContractAuthority,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<ContractAuthorityAction>) => {
    dispatch({
      type: ContractAuthorityActionType.LOADING,
    });
    const res: IContractAuthority | null = await updateContractAuthorityById(
      id,
      newContractAuthority,
    );
    if (res === null) {
      return;
    }
    dispatch({
      type: ContractAuthorityActionType.CHANGE_CURRENT_CONTRACT_AUTHORITY_BY_ID,
      payload: res,
    });
    onFinish();
  };
};
