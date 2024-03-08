import dayjs from "dayjs";
import { IDevice } from "../Model/device.model";
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

const db = getFirestore(app);

export const getDeviceById = async (
  deviceId: string,
): Promise<IDevice | undefined> => {
  try {
    const deviceDocRef = doc(db, "devices", deviceId);
    const deviceDocSnapshot = await getDoc(deviceDocRef);

    if (deviceDocSnapshot.exists()) {
      const deviceData = {
        id: deviceId,
        ...deviceDocSnapshot.data(),
      } as IDevice;
      return deviceData;
    } else {
      return undefined;
    }
  } catch (error) {
    // Handle errors (e.g., Firebase initialization issues, Firestore read errors)
    console.error("Error getting device by ID:", error);
    throw error;
  }
};
export const createDevice = async (
  newDevice: IDevice,
): Promise<IDevice | null> => {
  try {
    const devicesCollection = collection(db, "devices");
    const docRef = await addDoc(devicesCollection, {
      ...newDevice,
      warrantyPeriod: dayjs(newDevice?.warrantyPeriod).toString(),
    });
    const createdDeviceDoc = await getDoc(docRef);
    if (createdDeviceDoc.exists()) {
      const createdDeviceData = createdDeviceDoc.data() as IDevice;
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
export const getAllDevices = async (): Promise<IDevice[]> => {
  try {
    const devicesCollection = collection(db, "devices");
    const devicesSnapshot = await getDocs(devicesCollection);

    const devices: IDevice[] = [];
    devicesSnapshot.forEach((doc) => {
      devices.push({ id: doc.id, key: doc.id, ...doc.data() } as IDevice);
    });

    return devices;
  } catch (error) {
    console.error("Error getting all devices:", error);
    return [];
  }
};

export const updateDeviceById = async (
  deviceId: string,
  updatedDevice: Partial<IDevice>,
): Promise<IDevice | null> => {
  try {
    const deviceDocRef = doc(db, "devices", deviceId);
    await updateDoc(deviceDocRef, updatedDevice);
    // Fetch the updated data
    const updatedDeviceDoc = await getDoc(deviceDocRef);
    if (updatedDeviceDoc.exists()) {
      const updatedDeviceData = updatedDeviceDoc.data() as IDevice;
      return { id: updatedDeviceDoc.id, ...updatedDeviceData };
    } else {
      console.error("Updated device document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error updating device:", error);
    return null;
  }
};

export const deleteDeviceById = async (deviceId: string): Promise<boolean> => {
  try {
    const deviceDocRef = doc(db, "devices", deviceId);
    await deleteDoc(deviceDocRef);

    return true;
  } catch (error) {
    console.error("Error deleting device:", error);
    return false;
  }
};
