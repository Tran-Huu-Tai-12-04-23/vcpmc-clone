import { app } from "../config/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { IRecord } from "../Model/record.model";
import dayjs from "dayjs";

const db = getFirestore(app);

export type RecordsResponseType = {
  data: IRecord[] | null;
  message: string;
  status: boolean;
};
export type AddRecordResponseType = {
  data: string | null;
  message: string;
  status: boolean;
};
export const getRecords = async (): Promise<RecordsResponseType | null> => {
  try {
    const recordsCollection = collection(db, "record");
    const recordsQuery = query(recordsCollection);
    const querySnapshot = await getDocs(recordsQuery);

    const records: IRecord[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const docData = doc.data();
      const data: IRecord = {
        id: doc.id,
        codeISRC: docData?.codeISRC,
        nameRecord: docData?.nameRecord,
        duration: docData?.duration,
        single: docData?.single,
        author: docData?.author,
        genre: docData?.genre,
        format: docData?.format,
        expiryDate: docData.expiryDate,
        key: doc.id,
        thumbnails: docData?.thumbnails,
        numberContract: docData?.numberContract,
        link: docData?.link,
        manufactory: docData?.manufactory,
        createAt: docData.createAt ? docData.createAt : dayjs(),
        approvalDate: docData.approvalDate ? docData.approvalDate : dayjs(),
      };
      records.push(data);
    });

    return {
      data: records,
      status: true,
      message: "Get all records successfully!",
    };
  } catch (error: any) {
    console.error("Error fetching data from Firestore:", error.message);
    return null;
  }
};
export const searchRecords = async (
  key: string,
): Promise<RecordsResponseType | null> => {
  try {
    if (key === "") return null;
    const res: RecordsResponseType | null = await getRecords();
    if (res === null || res.data === null) {
      return null;
    }
    let data = res.data ? res.data : [];

    if (data === null) return null;
    data = data.filter(
      (dt: IRecord) => dt.nameRecord && dt.nameRecord.toString().includes(key),
    );
    data = data.filter(
      (dt: IRecord) => dt.single && dt.single.toString().includes(key),
    );

    return {
      data: data,
      status: true,
      message: "Search with " + key + " records successfully!",
    };
  } catch (error: any) {
    console.error("Error searching records:", error.message);
    return null;
  }
};

export const getRecordById = async (id: string) => {
  try {
    const recordRef = doc(db, "record", id);
    const docSnapshot = await getDoc(recordRef);

    if (docSnapshot.exists()) {
      const recordData = docSnapshot.data();
      const data: IRecord = {
        id: id,
        codeISRC: recordData?.codeISRC,
        nameRecord: recordData?.nameRecord,
        duration: recordData?.duration,
        single: recordData?.single,
        author: recordData?.author,
        genre: recordData?.genre,
        format: recordData?.format,
        expiryDate: recordData.expiryDate,
        key: id,
        thumbnails: recordData?.thumbnails,
        numberContract: recordData?.numberContract,
        link: recordData?.link,
        manufactory: recordData?.manufactory,
        createAt: recordData.createAt,
        approvalDate: recordData.approvalDate,
      };
      return data;
    } else {
      console.log("Record not found");
      return null;
    }
  } catch (error) {
    console.error("Error getting record by ID:", error);
    return null;
  }
};

export const updateRecordById = async (
  id: string,
  updatedData: Partial<IRecord>,
) => {
  try {
    const recordRef = doc(db, "record", id);
    const docSnapshot = await getDoc(recordRef);
    if (docSnapshot.exists()) {
      const updatedRecordData = {
        ...docSnapshot.data(),
        ...updatedData,
        approvalDate: updatedData.approvalDate?.toString(),
        createAt: updatedData.createAt?.toString(),
      };
      await updateDoc(recordRef, updatedRecordData);
      return { id, ...updatedRecordData } as IRecord;
    } else {
      console.log("Record not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating record by ID:", error);
    return null;
  }
};
export const removeRecordById = async (id: string) => {
  try {
    const recordRef = doc(db, "record", id);
    const docSnapshot = await getDoc(recordRef);

    if (docSnapshot.exists()) {
      await deleteDoc(recordRef);
      console.log("Record deleted successfully");
      return true;
    } else {
      console.log("Record not found");
      return false;
    }
  } catch (error) {
    console.error("Error removing record by ID:", error);
    return false;
  }
};

export const addRecord = async (
  newRecord: IRecord,
): Promise<AddRecordResponseType | null> => {
  try {
    const recordsCollection = collection(db, "record");

    const docRef = await addDoc(recordsCollection, {
      codeISRC: newRecord.codeISRC,
      nameRecord: newRecord.nameRecord,
      duration: newRecord.duration,
      single: newRecord.single,
      author: newRecord.author,
      genre: newRecord.genre,
      format: newRecord.format,
      expiryDate: newRecord.expiryDate.toString(), // Assuming expiryDate is a dayjs object
      thumbnails: newRecord.thumbnails,
      numberContract: newRecord.numberContract,
    });

    return {
      data: docRef.id,
      status: true,
      message: "Record added successfully!",
    };
  } catch (error: any) {
    console.error("Error adding record to Firestore:", error.message);
    return null;
  }
};

const generateExampleRecord = (index: number): IRecord => {
  return {
    codeISRC: `ISRC-${index}`,
    nameRecord: `Record-${index}`,
    duration: index * 100,
    single: `Single-${index}`,
    author: `Author-${index}`,
    genre: `Genre-${index}`,
    format: "audio",
    expiryDate: dayjs().add(index, "day"), // Example: Increment expiry date by 'index' days
    thumbnails: `https://developer.qualcomm.com/sites/default/files/audio_icon.jpg`,
    numberContract: `Contract-${index}`,
  };
};
export const addExampleRecords = async (): Promise<void> => {
  for (let i = 1; i <= 100; i++) {
    const exampleRecord: IRecord = generateExampleRecord(i);
    try {
      const result: AddRecordResponseType | null =
        await addRecord(exampleRecord);
      if (result?.status) {
        console.log(`Record added successfully with ID: ${result.data}`);
      } else {
        console.error(
          "Failed to add record:",
          result?.message || "Unknown error",
        );
      }
    } catch (error) {
      console.error("Error adding record:", error);
    }
  }
};
