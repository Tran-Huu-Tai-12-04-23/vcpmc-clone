import { IUser } from "../Model/user.model";
import { app } from "../config/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export const createUser = async (user: IUser): Promise<string | undefined> => {
  try {
    const usersCollection = collection(db, "user");
    const userDocRef = await addDoc(usersCollection, user);
    return userDocRef.id;
  } catch (error: any) {
    console.error("Create user in Firebase failed:", error.message);
  }
};

export const getAllUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const usersCollection = collection(db, "user");
    const querySnapshot = await getDocs(usersCollection);

    if (!querySnapshot.empty) {
      const users: IUser[] = querySnapshot.docs.map((doc) => {
        const userData = doc.data() as IUser;
        return {
          ...userData,
          id: doc.id,
        };
      });
      return users;
    }
  } catch (error: any) {
    console.error("Get all users from Firebase failed:", error.message);
  }
};

export const getUserById = async (id: string): Promise<IUser | undefined> => {
  try {
    const userDocRef = doc(db, "user", id);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data() as IUser;
      return {
        ...userData,
        id: userDoc.id,
      };
    }
  } catch (error: any) {
    console.error("Get user from Firebase failed:", error.message);
  }
};

export const updateUserById = async (
  userId: string,
  updatedData: Partial<IUser>,
): Promise<boolean> => {
  try {
    const user = getUserById(userId);
    if (user === null) {
      return false;
    }
    const newUser = {
      ...user,
      ...updatedData,
      userDetail: {
        ...updatedData.userDetail,
        dateOfBirth: updatedData.userDetail?.dateOfBirth.toString(),
      },
    };
    const userDocRef = doc(db, "user", userId);
    await updateDoc(userDocRef, newUser);
    return true;
  } catch (error: any) {
    console.error("Update user in Firebase failed:", error.message);
    return false;
  }
};

export const deleteUserById = async (userId: string): Promise<boolean> => {
  try {
    const userDocRef = doc(db, "user", userId);
    await deleteDoc(userDocRef);
    return true;
  } catch (error: any) {
    console.error("Delete user in Firebase failed:", error.message);
    return false;
  }
};
