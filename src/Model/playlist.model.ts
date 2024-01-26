import { Dayjs } from "dayjs";
import { IRecord } from "./record.model";

export interface IPlaylist {
  id?: string;
  key?: string;
  title: string;
  amountRecord: number;
  totalDuration: number;
  tags: string[];
  createAt: Dayjs;
  personCreated: string;
  thumbnails?: string;
  description: string;
  mode: boolean;
  records: IRecord[];
}
export interface IPlaylistState {
  loading: boolean;
  error?: string | undefined;
  playlists: IPlaylist[] | null;
  currentPlaylist: IPlaylist | null;
}
