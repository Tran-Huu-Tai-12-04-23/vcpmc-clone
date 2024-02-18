import { combineReducers } from "redux";
import { authenticateReducer } from "./authenticateInfo.reducer";
import { IAuthenticateInfoState } from "../../Model/authenticateInfo.model";
import { IUserDetailState, userDetailReducer } from "./userDetail.reducer";
import { IRecordState } from "../../Model/record.model";
import { recordReducer } from "./record.reducer";
import { IPlaylistState } from "../../Model/playlist.model";
import { playlistReducer } from "./playlist.reducer";
import { IContractMiningState } from "../../Model/contractMining.model";
import { contractMiningReducer } from "./contractMining.reducer";
import { IUserState } from "../../Model/user.model";
import { userReducer } from "./user.reducer";
import { IContractAuthorityState } from "../../Model/contractAuthority.model";
import { contractAuthorityReducer } from "./contractAuthority.reducer";

export type RootState = {
  authenticate: IAuthenticateInfoState;
  userDetail: IUserDetailState;
  records: IRecordState;
  playlists: IPlaylistState;
  contractMining: IContractMiningState;
  contractAuthority: IContractAuthorityState;
  users: IUserState;
};

export const rootReducers = combineReducers({
  authenticate: authenticateReducer,
  userDetail: userDetailReducer,
  records: recordReducer,
  playlists: playlistReducer,
  contractMining: contractMiningReducer,
  contractAuthority: contractAuthorityReducer,
  users: userReducer,
});
