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
import { IRole } from "../Model/role.model";

const db = getFirestore(app);

export const getRoleById = async (
  roleId: string,
): Promise<IRole | undefined> => {
  try {
    const roleDocRef = doc(db, "roles", roleId);
    const roleDocSnapShot = await getDoc(roleDocRef);

    if (roleDocSnapShot.exists()) {
      const roleData = {
        id: roleId,
        ...roleDocSnapShot.data(),
      } as IRole;
      return roleData;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error getting role by ID:", error);
    throw error;
  }
};
export const createRole = async (newRole: IRole): Promise<IRole | null> => {
  try {
    const roleCollection = collection(db, "roles");
    const docRef = await addDoc(roleCollection, {
      ...newRole,
    });
    const createRoleDoc = await getDoc(docRef);
    if (createRoleDoc.exists()) {
      const roleData = createRoleDoc.data() as IRole;
      return { id: docRef.id, key: docRef.id, ...roleData };
    } else {
      console.error("Error creating role document not found");
      return null;
    }
  } catch (error) {
    console.error("Error creating role :", error);
    return null;
  }
};

export const getAllRole = async (): Promise<IRole[]> => {
  try {
    const roleCollection = collection(db, "roles");
    const roleSnapShot = await getDocs(roleCollection);
    const role: IRole[] = [];
    roleSnapShot.forEach((doc) => {
      role.push({
        id: doc.id,
        key: doc.id,
        ...doc.data(),
      } as IRole);
    });

    return role;
  } catch (error) {
    console.error("Error getting all authorized partner:", error);
    return [];
  }
};

export const updateRoleById = async (
  roleId: string,
  updatedRole: Partial<IRole>,
): Promise<IRole | null> => {
  try {
    const roleDocRef = doc(db, "roles", roleId);
    await updateDoc(roleDocRef, updatedRole);
    // Fetch the updated data
    const updatedRoleDoc = await getDoc(roleDocRef);
    if (updatedRoleDoc.exists()) {
      const roleData = updatedRoleDoc.data() as IRole;
      return { id: updatedRoleDoc.id, ...roleData };
    } else {
      console.error("Updated role document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error updating role:", error);
    return null;
  }
};

export const deleteRoleById = async (roleId: string): Promise<boolean> => {
  try {
    const roleDocRef = doc(db, "roles", roleId);
    await deleteDoc(roleDocRef);
    return true;
  } catch (error) {
    console.error("Error deleting role:", error);
    return false;
  }
};
