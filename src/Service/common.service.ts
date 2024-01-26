import { app } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Upload image function
export const uploadImage = async (
  file: File,
  folderName: string = "img",
): Promise<string | null> => {
  try {
    const storage = getStorage(app);
    const storageRef = ref(storage, `${folderName}/${file.name}`);
    await uploadBytes(storageRef, file);

    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log("File uploaded successfully. Download URL:", downloadURL);

    return downloadURL;
  } catch (error: any) {
    console.error("Error uploading file:", error.message);
    return null;
  }
};
