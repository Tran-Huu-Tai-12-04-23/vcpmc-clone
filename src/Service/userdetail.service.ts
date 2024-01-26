import { IUserDetail } from '../Model/userDetail.model';
import { app } from '../config/firebase';
import { getFirestore, collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

const db = getFirestore(app);

export const getUserDetailByID = async (userId: string): Promise<IUserDetail | undefined> => {
    try {
        const usersCollection = collection(db, 'user-detail');
        const userQuery = query(usersCollection, where('userId', '==', userId));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data() as IUserDetail;
            return {
                ...userData,
                id: querySnapshot.docs[0].id,
            };
        }
    } catch (error: any) {
        console.error('Get user detial from firebase failed:', error.message);
    }
};

export const updateUserDetailById = async (
    userDetailId: string,
    updatedData: Partial<IUserDetail>,
): Promise<boolean> => {
    try {
        const userDocRef = doc(db, 'user-detail', userDetailId);
        await updateDoc(userDocRef, {
            ...updatedData,
            dateOfBirth: updatedData.dateOfBirth?.format('YYYY-MM-DD'),
        });
        return true;
    } catch (error: any) {
        console.error('Update user detail in Firebase failed:', error.message);
        return false;
    }
};
