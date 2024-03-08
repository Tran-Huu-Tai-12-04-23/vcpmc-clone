import dayjs from "dayjs";
import { app } from "../config/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { IAuthorizedPartner } from "../Model/authorizedPartner.model";

const db = getFirestore(app);

export const getAuthorizedPartnerById = async (
  authorizedPartnerId: string,
): Promise<IAuthorizedPartner | undefined> => {
  try {
    const authorizedPartnerDocRef = doc(
      db,
      "authorized-partner",
      authorizedPartnerId,
    );
    const authorizedPartnerDocSnapshot = await getDoc(authorizedPartnerDocRef);

    if (authorizedPartnerDocSnapshot.exists()) {
      const authorizedPartnerData = {
        id: authorizedPartnerId,
        ...authorizedPartnerDocSnapshot.data(),
      } as IAuthorizedPartner;
      return authorizedPartnerData;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error getting authorized partner by ID:", error);
    throw error;
  }
};
export const createAuthorizedPartner = async (
  newAuthorizedPartner: IAuthorizedPartner,
): Promise<IAuthorizedPartner | null> => {
  try {
    const authorizedPartnerCollection = collection(db, "authorized-partner");
    const docRef = await addDoc(authorizedPartnerCollection, {
      ...newAuthorizedPartner,
      expirationDate: dayjs(newAuthorizedPartner?.expirationDate).toString(),
    });
    const createAuthorizedPartnerDoc = await getDoc(docRef);
    if (createAuthorizedPartnerDoc.exists()) {
      const createdDeviceData =
        createAuthorizedPartnerDoc.data() as IAuthorizedPartner;
      return { id: docRef.id, ...createdDeviceData };
    } else {
      console.error("Error creating device: Document not found");
      return null;
    }
  } catch (error) {
    console.error("Error creating device:", error);
    return null;
  }
};
export const getAllAuthorizedPartner = async (): Promise<
  IAuthorizedPartner[]
> => {
  try {
    const authorizedPartnerCollection = collection(db, "authorized-partner");
    const authorizedPartnerSnapshot = await getDocs(
      authorizedPartnerCollection,
    );
    const authorizedPartner: IAuthorizedPartner[] = [];
    authorizedPartnerSnapshot.forEach((doc) => {
      authorizedPartner.push({
        id: doc.id,
        key: doc.id,
        ...doc.data(),
      } as IAuthorizedPartner);
    });

    return authorizedPartner;
  } catch (error) {
    console.error("Error getting all authorized partner:", error);
    return [];
  }
};

export const updateAuthorizedPartnerById = async (
  authorizedPartnerId: string,
  updatedAuthorizedPartner: Partial<IAuthorizedPartner>,
): Promise<IAuthorizedPartner | null> => {
  try {
    const authorizedPartnerDocRef = doc(
      db,
      "authorized-partner",
      authorizedPartnerId,
    );
    await updateDoc(authorizedPartnerDocRef, updatedAuthorizedPartner);
    // Fetch the updated data
    const updatedAuthorizedPartnerDoc = await getDoc(authorizedPartnerDocRef);
    if (updatedAuthorizedPartnerDoc.exists()) {
      const updatedDeviceData =
        updatedAuthorizedPartnerDoc.data() as IAuthorizedPartner;
      return { id: updatedAuthorizedPartnerDoc.id, ...updatedDeviceData };
    } else {
      console.error("Updated authorized partner document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error updating authorized partner:", error);
    return null;
  }
};

export const deleteAuthorizedPartnerById = async (
  authorizedPartnerId: string,
): Promise<boolean> => {
  try {
    const authorizedPartnerDocRef = doc(
      db,
      "authorized-partner",
      authorizedPartnerId,
    );
    await deleteDoc(authorizedPartnerDocRef);

    return true;
  } catch (error) {
    console.error("Error deleting authorized partner:", error);
    return false;
  }
};

const dataExample: IAuthorizedPartner[] = [
  {
    fullName: "John Doe",
    username: "john_doe123",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    expirationDate: dayjs("2022-12-31"),
    status: true,
    role: "admin",
    password: "securepassword",
    confirmPassword: "securepassword",
  },
  {
    fullName: "Jane Smith",
    username: "jane_smith456",
    email: "jane.smith@example.com",
    phoneNumber: "+9876543210",
    expirationDate: dayjs("2023-06-30"),
    status: false,
    role: "user",
    password: "anotherpassword",
    confirmPassword: "anotherpassword",
  },
  {
    fullName: "Alex Johnson",
    username: "alex_j",
    email: "alex.j@example.com",
    phoneNumber: "+1122334455",
    expirationDate: dayjs("2024-04-15"),
    status: true,
    role: "admin",
    password: "securepassword123",
    confirmPassword: "securepassword123",
  },
  {
    fullName: "Emma Brown",
    username: "emma_brown",
    email: "emma.brown@example.com",
    phoneNumber: "+9988776655",
    expirationDate: dayjs("2023-11-22"),
    status: true,
    role: "user",
    password: "password123",
    confirmPassword: "password123",
  },
  {
    // Thêm các bản ghi khác tương tự
    fullName: "Michael Davis",
    username: "michael_d",
    email: "michael.d@example.com",
    phoneNumber: "+3322114455",
    expirationDate: dayjs("2023-08-10"),
    status: false,
    role: "admin",
    password: "michaelpassword",
    confirmPassword: "michaelpassword",
  },
  {
    fullName: "Olivia White",
    username: "olivia_white",
    email: "olivia.white@example.com",
    phoneNumber: "+5544332211",
    expirationDate: dayjs("2024-02-28"),
    status: true,
    role: "user",
    password: "oliviapassword",
    confirmPassword: "oliviapassword",
  },
];

export const initData = () => {
  dataExample.forEach((data) => createAuthorizedPartner(data));
};
