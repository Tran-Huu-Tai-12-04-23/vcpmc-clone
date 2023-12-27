import { app } from '../config/firebase';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { IUser } from '../Model/user.model';

const db = getFirestore(app);

export const login = async (user: IUser) => {
    try {
        const usersCollection = collection(db, 'user');
        const userQuery = query(usersCollection, where('username', '==', user.username));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data() as IUser;
            if (userData.password === user.password) {
                // Password matches, perform login logic here
                return {
                    status: true,
                    message: 'Login successful!',
                    data: userData,
                };
            } else {
                return {
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
    }
};
