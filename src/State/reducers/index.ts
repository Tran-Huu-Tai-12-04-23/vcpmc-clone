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

export type RootState = {
  authenticate: IAuthenticateInfoState;
  userDetail: IUserDetailState;
  records: IRecordState;
  playlists: IPlaylistState;
  contractMining: IContractMiningState;
};

export const rootReducers = combineReducers({
  authenticate: authenticateReducer,
  userDetail: userDetailReducer,
  records: recordReducer,
  playlists: playlistReducer,
  contractMining: contractMiningReducer,
});
