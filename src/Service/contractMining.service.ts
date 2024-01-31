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
import { IContractMining } from "../Model/contractMining.model";

const db = getFirestore(app);

export type ContractMiningResponseType = {
  data: IContractMining[] | null;
  message: string;
  status: boolean;
};
export type AddContractMiningResponseType = {
  data: IContractMining | null;
  message: string;
  status: boolean;
};
export const getContractMinings =
  async (): Promise<ContractMiningResponseType | null> => {
    try {
      const playlistsCollection = collection(db, "contract-mining");
      const recordsQuery = query(playlistsCollection);
      const querySnapshot = await getDocs(recordsQuery);

      const records: IContractMining[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const docData = doc.data();
        const data: IContractMining = {
          id: doc.id,
          key: doc.id,
          nameContract: docData.nameContract,
          numberContract: docData.numberContract,
          customer: docData.customer,
          createAt: docData.createAt,
          applyDate: docData.applyDate,
          expireDate: docData.expireDate,
          status: docData.status,
          file: docData.file,
          typeContract: docData.typeContract,
          value: docData.value,
          username: docData.username,
          password: docData.password,
          numberAccount: docData.numberAccount,
          nameBank: docData.nameBank,
          CMND_CCCD: docData.CMND_CCCD,
          dateAllocated: docData.dateAllocated,
          placeAllocated: docData.placeAllocated,
          gender: docData.gender,
          email: docData.email,
          birthDay: docData.birthDay,
          representative: docData.representative,
          nameOfUnitUsed: docData.nameOfUnitUsed,
        };
        records.push(data);
      });

      return {
        data: records,
        status: true,
        message: "Get all contract mining successfully!",
      };
    } catch (error: any) {
      console.error("Error fetching data from Firestore:", error.message);
      return null;
    }
  };

export const addContractMining = async (
  newContractMining: IContractMining,
): Promise<AddContractMiningResponseType | null> => {
  try {
    const contractMiningCollection = collection(db, "contract-mining");

    const docRef = await addDoc(contractMiningCollection, {
      nameContract: newContractMining.nameContract,
      numberContract: newContractMining.numberContract,
      customer: newContractMining.customer,
      createAt: newContractMining.createAt,
      applyDate: newContractMining.applyDate,
      expireDate: newContractMining.expireDate,
      status: newContractMining.status,
      file: newContractMining.file,
      typeContract: newContractMining.typeContract,
      value: newContractMining.value,
      username: newContractMining.username,
      password: newContractMining.password,
      numberAccount: newContractMining.numberAccount,
      nameBank: newContractMining.nameBank,
      CMND_CCCD: newContractMining.CMND_CCCD,
      dateAllocated: newContractMining.dateAllocated,
      placeAllocated: newContractMining.placeAllocated,
      gender: newContractMining.gender,
      email: newContractMining.email,
      birthDay: newContractMining.birthDay,
      representative: newContractMining.representative,
      nameOfUnitUsed: newContractMining.nameOfUnitUsed,
    });

    const contractMiningAdded: IContractMining = {
      nameContract: newContractMining.nameContract,
      numberContract: newContractMining.numberContract,
      customer: newContractMining.customer,
      createAt: newContractMining.createAt,
      applyDate: newContractMining.applyDate,
      expireDate: newContractMining.expireDate,
      status: newContractMining.status,
      file: newContractMining.file,
      typeContract: newContractMining.typeContract,
      value: newContractMining.value,
      username: newContractMining.username,
      password: newContractMining.password,
      numberAccount: newContractMining.numberAccount,
      nameBank: newContractMining.nameBank,
      CMND_CCCD: newContractMining.CMND_CCCD,
      dateAllocated: newContractMining.dateAllocated,
      placeAllocated: newContractMining.placeAllocated,
      gender: newContractMining.gender,
      email: newContractMining.email,
      birthDay: newContractMining.birthDay,
      representative: newContractMining.representative,
      nameOfUnitUsed: newContractMining.nameOfUnitUsed,
      id: docRef.id,
      key: docRef.id,
    };

    return {
      data: contractMiningAdded,
      status: true,
      message: "Contract mining added successfully!",
    };
  } catch (error: any) {
    console.error("Error adding record to Firestore:", error.message);
    return null;
  }
};

export const getContractMiningById = async (id: string) => {
  try {
    const contractMiningRef = doc(db, "contract-mining", id);
    const docSnapshot = await getDoc(contractMiningRef);

    if (docSnapshot.exists()) {
      const contractMining = docSnapshot.data();
      const data: IContractMining = {
        id: id,
        key: id,
        nameContract: contractMining.nameContract,
        numberContract: contractMining.numberContract,
        customer: contractMining.customer,
        createAt: contractMining.createAt,
        applyDate: contractMining.applyDate,
        expireDate: contractMining.expireDate,
        status: contractMining.status,
        file: contractMining.file,
        typeContract: contractMining.typeContract,
        value: contractMining.value,
        username: contractMining.username,
        password: contractMining.password,
        numberAccount: contractMining.numberAccount,
        nameBank: contractMining.nameBank,
        CMND_CCCD: contractMining.CMND_CCCD,
        dateAllocated: contractMining.dateAllocated,
        placeAllocated: contractMining.placeAllocated,
        gender: contractMining.gender,
        email: contractMining.email,
        birthDay: contractMining.birthDay,
        representative: contractMining.representative,
        nameOfUnitUsed: contractMining.nameOfUnitUsed,
      };
      return data;
    } else {
      console.log("Contract mining not found");
      return null;
    }
  } catch (error) {
    console.error("Error getting contract mining by ID:", error);
    return null;
  }
};
export const removeContractMiningById = async (id: string) => {
  try {
    const contractMiningRef = doc(db, "contract-mining", id);
    const docSnapshot = await getDoc(contractMiningRef);

    if (docSnapshot.exists()) {
      await deleteDoc(contractMiningRef);
      console.log("Contract mining deleted successfully");
      return true;
    } else {
      console.log("Contract mining not found");
      return false;
    }
  } catch (error) {
    console.error("Error removing contract mining by ID:", error);
    return false;
  }
};

export const updateContractMiningById = async (
  id: string,
  updatedData: Partial<IContractMining>,
) => {
  try {
    const contractMiningRef = doc(db, "contract-mining", id);
    const docSnapshot = await getDoc(contractMiningRef);
    if (docSnapshot.exists()) {
      const updatedRecordData = {
        ...docSnapshot.data(),
        ...updatedData,
      };
      await updateDoc(contractMiningRef, updatedRecordData);
      return { id, ...updatedRecordData } as IContractMining;
    } else {
      console.log("Contract mining not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating contract mining by ID:", error);
    return null;
  }
};
