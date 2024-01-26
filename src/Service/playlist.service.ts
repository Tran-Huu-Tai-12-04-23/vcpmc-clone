import { app } from "../config/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  where,
  or,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { IPlaylist } from "../Model/playlist.model";
import { IRecord } from "../Model/record.model";

const db = getFirestore(app);

export type PlaylistResponseType = {
  data: IPlaylist[] | null;
  message: string;
  status: boolean;
};
export type AddPlaylistResponseType = {
  data: IPlaylist | null;
  message: string;
  status: boolean;
};
export const getPlaylists = async (): Promise<PlaylistResponseType | null> => {
  try {
    const playlistsCollection = collection(db, "playlist");
    const recordsQuery = query(playlistsCollection);
    const querySnapshot = await getDocs(recordsQuery);

    const records: IPlaylist[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const docData = doc.data();
      const data: IPlaylist = {
        id: doc.id,
        key: doc.id,
        title: docData.title,
        amountRecord: docData.amountRecord,
        totalDuration: docData.totalDuration,
        tags: docData.tags,
        createAt: docData.createAt,
        personCreated: docData.personCreated,
        thumbnails: docData.thumbnails,
        description: docData.description,
        mode: docData.mode,
        records: docData.records,
      };
      records.push(data);
    });

    return {
      data: records,
      status: true,
      message: "Get all playlist successfully!",
    };
  } catch (error: any) {
    console.error("Error fetching data from Firestore:", error.message);
    return null;
  }
};

export const addPlaylist = async (
  newPlaylist: IPlaylist,
): Promise<AddPlaylistResponseType | null> => {
  try {
    const playlistCollection = collection(db, "playlist");

    const docRef = await addDoc(playlistCollection, {
      title: newPlaylist.title,
      amountRecord: newPlaylist.amountRecord,
      totalDuration: newPlaylist.totalDuration,
      tags: newPlaylist.tags,
      createAt: newPlaylist.createAt.toString(),
      personCreated: newPlaylist.personCreated,
      thumbnails: newPlaylist.thumbnails,
      description: newPlaylist.description,
      mode: newPlaylist.mode,
      records: newPlaylist.records.map((record: IRecord) => {
        return {
          ...record,
          expiryDate: record.expiryDate.toString(),
          dateReceivingAuthorization: record.expiryDate.toString(),
          createAt: record.expiryDate.toString(),
          approvalDate: record.expiryDate.toString(),
          link: "test",
          manufactory: "test",
        };
      }),
    });

    const playlistAdded: IPlaylist = {
      title: newPlaylist.title,
      amountRecord: newPlaylist.amountRecord,
      totalDuration: newPlaylist.totalDuration,
      tags: newPlaylist.tags,
      createAt: newPlaylist.createAt,
      personCreated: newPlaylist.personCreated,
      thumbnails: newPlaylist.thumbnails,
      description: newPlaylist.description,
      mode: newPlaylist.mode,
      records: newPlaylist.records,
      id: docRef.id,
    };

    return {
      data: playlistAdded,
      status: true,
      message: "Record added successfully!",
    };
  } catch (error: any) {
    console.error("Error adding record to Firestore:", error.message);
    return null;
  }
};
