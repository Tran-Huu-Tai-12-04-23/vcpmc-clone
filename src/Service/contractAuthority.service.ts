import { ConfigColAuthority } from "./../Page/manager/authority/_configTable";
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
import { IContractAuthority } from "../Model/contractAuthority.model";
import dayjs from "dayjs";

const db = getFirestore(app);

export type ContractAuthorityResponseType = {
  data: IContractAuthority[] | null;
  message: string;
  status: boolean;
};
export type AddContractAuthorityResponseType = {
  data: IContractAuthority | null;
  message: string;
  status: boolean;
};
export const getContractAuthorities =
  async (): Promise<ContractAuthorityResponseType | null> => {
    try {
      const contractAuthorityCollection = collection(db, "contract-authority");
      const contractAuthorityQuery = query(contractAuthorityCollection);
      const querySnapshot = await getDocs(contractAuthorityQuery);

      const contractAuthorities: IContractAuthority[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const docData = doc.data();
        const data: IContractAuthority = {
          id: doc.id,
          key: doc.id,
          nationality: docData.nationality,
          gender: docData.gender,
          nameContract: docData.nameContract,
          numberContract: docData.numberContract,
          customer: docData.customer,
          createAt: dayjs(docData.createAt),
          dateEffect: dayjs(docData.dateEffect),
          expireDate: dayjs(docData.expireDate),
          status: docData.status,
          file: docData.file,
          username: docData.username,
          password: docData.password,
          numberAccount: docData.numberAccount,
          nameBank: docData.nameBank,
          CMND_CCCD: docData.CMND_CCCD,
          dateAllocated: dayjs(docData.dateAllocated),
          placeAllocated: docData.placeAllocated,
          email: docData.email,
          authorizedLegalEntity: docData.authorizedLegalEntity,
          personAuthority: docData.personAuthority,
        };
        contractAuthorities.push(data);
      });

      return {
        data: contractAuthorities,
        status: true,
        message: "Get all contract mining successfully!",
      };
    } catch (error: any) {
      console.error("Error fetching data from Firestore:", error.message);
      return null;
    }
  };

export const addContractAuthority = async (
  newContractAuthority: IContractAuthority,
): Promise<AddContractAuthorityResponseType | null> => {
  try {
    const ContractAuthorityCollection = collection(db, "contract-authority");
    const docRef = await addDoc(ContractAuthorityCollection, {
      ...newContractAuthority,
      nameContract: newContractAuthority.nameContract,
      numberContract: newContractAuthority.numberContract,
      customer: newContractAuthority.customer,
      createAt: dayjs().toString(),
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

    const ContractAuthorityAdded: IContractAuthority = {
      ...newContractAuthority,
      nameContract: newContractAuthority.nameContract,
      numberContract: newContractAuthority.numberContract,
      customer: newContractAuthority.customer,
      createAt: newContractAuthority.createAt,
      dateEffect: newContractAuthority.dateEffect,
      expireDate: newContractAuthority.expireDate,
      status: newContractAuthority.status,
      file: newContractAuthority.file,
      username: newContractAuthority.username,
      password: newContractAuthority.password,
      numberAccount: newContractAuthority.numberAccount,
      nameBank: newContractAuthority.nameBank,
      CMND_CCCD: newContractAuthority.CMND_CCCD,
      dateAllocated: newContractAuthority.dateAllocated,
      placeAllocated: newContractAuthority.placeAllocated,
      email: newContractAuthority.email,
      authorizedLegalEntity: newContractAuthority.authorizedLegalEntity,
      personAuthority: newContractAuthority.personAuthority,
      id: docRef.id,
      key: docRef.id,
    };

    return {
      data: ContractAuthorityAdded,
      status: true,
      message: "Contract mining added successfully!",
    };
  } catch (error: any) {
    console.error("Error adding record to Firestore:", error.message);
    return null;
  }
};

export const getContractAuthorityById = async (id: string) => {
  try {
    const ContractAuthorityRef = doc(db, "contract-authority", id);
    const docSnapshot = await getDoc(ContractAuthorityRef);

    if (docSnapshot.exists()) {
      const ContractAuthority = docSnapshot.data();
      const data: IContractAuthority = {
        ...ContractAuthority,
        id: id,
        key: id,
        nameContract: ContractAuthority.nameContract,
        numberContract: ContractAuthority.numberContract,
        customer: ContractAuthority.customer,
        createAt: ContractAuthority.createAt,
        dateEffect: ContractAuthority.dateEffect,
        expireDate: ContractAuthority.expireDate,
        status: ContractAuthority.status,
        file: ContractAuthority.file,
        username: ContractAuthority.username,
        password: ContractAuthority.password,
        numberAccount: ContractAuthority.numberAccount,
        nameBank: ContractAuthority.nameBank,
        CMND_CCCD: ContractAuthority.CMND_CCCD,
        dateAllocated: ContractAuthority.dateAllocated,
        placeAllocated: ContractAuthority.placeAllocated,
        email: ContractAuthority.email,
        authorizedLegalEntity: ContractAuthority.authorizedLegalEntity,
        personAuthority: ContractAuthority.personAuthority,
        nationality: ContractAuthority.nationality,
        gender: ContractAuthority.gender,
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
export const removeContractAuthorityById = async (id: string) => {
  try {
    const ContractAuthorityRef = doc(db, "contract-authority", id);
    const docSnapshot = await getDoc(ContractAuthorityRef);

    if (docSnapshot.exists()) {
      await deleteDoc(ContractAuthorityRef);
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

export const updateContractAuthorityById = async (
  id: string,
  updatedData: Partial<IContractAuthority>,
) => {
  try {
    console.log({
      ...updatedData,
      nameContract: updatedData.nameContract,
      numberContract: updatedData.numberContract,
      customer: updatedData.customer,
      createAt: updatedData.createAt,
      dateEffect: updatedData.dateEffect,
      expireDate: updatedData.expireDate,
      status: updatedData.status,
      file: updatedData.file,
      username: updatedData.username,
      password: updatedData.password,
      numberAccount: updatedData.numberAccount,
      nameBank: updatedData.nameBank,
      CMND_CCCD: updatedData.CMND_CCCD,
      dateAllocated: updatedData.dateAllocated,
      placeAllocated: updatedData.placeAllocated,
      email: updatedData.email,
      authorizedLegalEntity: updatedData.authorizedLegalEntity,
      personAuthority: updatedData.personAuthority,
    });
    const ContractAuthorityRef = doc(db, "contract-authority", id);
    const docSnapshot = await getDoc(ContractAuthorityRef);
    if (docSnapshot.exists()) {
      const newData = {
        ...docSnapshot.data(),
        ...updatedData,
        nameContract: updatedData.nameContract,
        numberContract: updatedData.numberContract,
        customer: updatedData.customer,
        createAt: updatedData.createAt,
        dateEffect: updatedData.dateEffect,
        expireDate: updatedData.expireDate,
        status: updatedData.status,
        file: updatedData.file,
        username: updatedData.username,
        password: updatedData.password,
        numberAccount: updatedData.numberAccount,
        nameBank: updatedData.nameBank,
        CMND_CCCD: updatedData.CMND_CCCD,
        dateAllocated: updatedData.dateAllocated,
        placeAllocated: updatedData.placeAllocated,
        email: updatedData.email,
        authorizedLegalEntity: updatedData.authorizedLegalEntity,
        personAuthority: updatedData.personAuthority,
      };
      const updatedRecordData = {
        ...newData,
      };
      await updateDoc(ContractAuthorityRef, updatedRecordData);
      return { id, ...updatedRecordData } as unknown as IContractAuthority;
    } else {
      console.log("Contract mining not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating contract mining by ID:", error);
    return null;
  }
};
