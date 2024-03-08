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
import { IUnitUsed } from "../Model/unitUsed.model";
import { typeRole } from "../Model/contractMining.model";

const db = getFirestore(app);

export const getUnitUsedById = async (
  unitUsedId: string,
): Promise<IUnitUsed | null> => {
  try {
    const unitUsedDocRef = doc(db, "unit-used", unitUsedId);
    const unitUsedDataSnapDoc = await getDoc(unitUsedDocRef);

    if (unitUsedDataSnapDoc.exists()) {
      const unitUsedData = {
        id: unitUsedId,
        ...unitUsedDataSnapDoc.data(),
      } as IUnitUsed;
      return unitUsedData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting unit used by ID:", error);
    return null;
  }
};
export const createUnitUsed = async (
  newUnitUsed: IUnitUsed,
): Promise<IUnitUsed | null> => {
  try {
    const unitUsedCollection = collection(db, "unit-used");
    const docRef = await addDoc(unitUsedCollection, {
      ...newUnitUsed,
      expirationDate: dayjs(newUnitUsed?.expirationDate).toString(),
      users: newUnitUsed.users.map((user) => {
        return {
          ...user,
          updateDate: dayjs(user.updateDate).toString(),
          userDetail: {
            ...user.userDetail,
            dateOfBirth: user?.userDetail
              ? dayjs(user?.userDetail.dateOfBirth).toString()
              : dayjs().toString(),
          },
        };
      }),
    });
    const createUnitUsedDoc = await getDoc(docRef);
    if (createUnitUsedDoc.exists()) {
      const createUnitUsed = createUnitUsedDoc.data() as IUnitUsed;
      return { id: docRef.id, ...createUnitUsed };
    } else {
      console.error("Error creating unit used not found");
      return null;
    }
  } catch (error) {
    console.error("Error creating unit used:", error);
    return null;
  }
};
export const getAllUnitUsed = async (): Promise<IUnitUsed[]> => {
  try {
    const unitUsedCollection = collection(db, "unit-used");
    const unitUsedSnapshot = await getDocs(unitUsedCollection);
    const unitUsed: IUnitUsed[] = [];
    unitUsedSnapshot.forEach((doc) => {
      unitUsed.push({
        id: doc.id,
        key: doc.id,
        ...doc.data(),
      } as IUnitUsed);
    });

    return unitUsed;
  } catch (error) {
    console.error("Error getting all unit used:", error);
    return [];
  }
};

export const updateUnitUsedById = async (
  unitUsedId: string,
  updatedUnitUsedData: Partial<IUnitUsed>,
): Promise<IUnitUsed | null> => {
  try {
    const unitUsedDocRef = doc(db, "unit-used", unitUsedId);
    await updateDoc(unitUsedDocRef, updatedUnitUsedData);
    // Fetch the updated data
    const updatedUnitUsedDataDoc = await getDoc(unitUsedDocRef);
    if (updatedUnitUsedDataDoc.exists()) {
      const unitUsedData = updatedUnitUsedDataDoc.data() as IUnitUsed;
      return { id: updatedUnitUsedDataDoc.id, ...unitUsedData };
    } else {
      console.error("Updated unit used document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error updating unit used:", error);
    return null;
  }
};

export const deleteUnitUsedById = async (
  unitUsedId: string,
): Promise<boolean> => {
  try {
    const unitUsedDocRef = doc(db, "unit-used", unitUsedId);
    await deleteDoc(unitUsedDocRef);
    return true;
  } catch (error) {
    console.error("Error deleting unit used:", error);
    return false;
  }
};

export const initData = () => {
  const unitUsedData: IUnitUsed[] = Array.from({ length: 10 }, (_, index) => ({
    adminAccountName: `Admin ${index + 1}`,
    admin: `admin_${index + 1}`,
    user: `user_${index + 1}`,
    numberContract: `Contract-${index + 1}`,
    specifiedDevice: `Device_${index + 1}`,
    expirationDate: dayjs().add(index + 1, "month"),
    status: index % 2 === 0,
    users: [
      {
        username: `user_${index + 1}_${0 + 1}`,
        password: `password_${index + 1}_${0 + 1}`,
        updateDate: dayjs().subtract(index, "day"),
        userDetail: {
          firstName: `First_${index + 1}_${0 + 1}`,
          lastName: `Last_${index + 1}_${0 + 1}`,
          phoneNumber: `+123456789${0}`,
          email: `user${index + 1}_${0 + 1}@example.com`,
          dateOfBirth: dayjs().subtract(0 + 1, "year"),
          role: typeRole.USER,
          userId: `user_id_${index + 1}_${0 + 1}`,
          nationality: "Nationality",
          address: "Address",
          gender: "Male",
        },
      },
    ],
  }));

  unitUsedData.forEach(async (dt) => {
    const transformedData = {
      ...dt,
      expirationDate: dayjs(dt?.expirationDate).toString(),
      users: dt.users.map((user) => ({
        ...user,
        updateDate: dayjs(user.updateDate).toString(),
        userDetail: {
          ...user.userDetail,
          dateOfBirth: user?.userDetail
            ? dayjs(user?.userDetail.dateOfBirth).toString()
            : dayjs().toString(),
        },
      })),
    };
    console.log(transformedData);
    await createUnitUsed(dt);
  });
};
