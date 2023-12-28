import { app } from '../config/firebase';
import { getFirestore, collection, getDocs, query, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import { IUser } from '../Model/user.model';

const db = getFirestore(app);

export type ResponseType = {
    data: IUser | null;
    message: string;
    status: boolean;
};

export const login = async (user: IUser): Promise<ResponseType | null> => {
    try {
        const usersCollection = collection(db, 'user');
        const userQuery = query(usersCollection, where('username', '==', user.username));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data() as IUser;
            if (userData.password === user.password) {
                return {
                    status: true,
                    message: 'Login successful!',
                    data: {
                        id: querySnapshot.docs[0].id,
                        ...userData,
                    },
                };
            } else {
                return {
                    data: null,
                    status: false,
                    message: 'Invalid password!',
                };
            }
        } else {
            // User with the provided username does not exist
            return {
                status: false,
                message: 'User not found!',
                data: null,
            };
        }
    } catch (error: any) {
        console.error('Error fetching data from Firestore:', error.message);
        return null;
    }
};

export const resetPassword = async (
    userId: string,
    oldPassword: string,
    newPassword: string,
): Promise<ResponseType> => {
    const response: ResponseType = {
        data: null,
        message: '',
        status: false,
    };
    try {
        const userDocRef = doc(db, 'user', userId);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            response.message = 'Người dùng không tồn tại!';
        } else if (userDoc.data().password !== oldPassword) {
            response.message = 'Mật khẩu của bạn không chính xác!';
        } else {
            await updateDoc(userDocRef, {
                password: newPassword,
            });
            response.message = 'Đổi mật khẩu thành công!';
            response.status = true;
            response.data = userDoc.data() as IUser;
        }

        return response;
    } catch (error: any) {
        console.error('Reset password failed:', error.message);
        response.message = 'Đổi mật khẩu không thành công!';
        return response;
    }
};
