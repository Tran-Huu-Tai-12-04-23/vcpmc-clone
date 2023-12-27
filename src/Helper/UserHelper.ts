import { IUser } from '../Model/user.model';
import Encode from './Encode';

class UserHelper {
    static keyLogin = 'l-f';

    static saveInformationLogin(user: IUser) {
        sessionStorage.clear();
        const dataEncrypted = Encode.encryptInformation(JSON.stringify(user));
        sessionStorage.setItem(this.keyLogin, dataEncrypted);
    }

    static getInformationLogin(): IUser | null {
        const dataEncrypted = sessionStorage.getItem(this.keyLogin);
        if (dataEncrypted) {
            const decryptedData = Encode.decryptInformation(dataEncrypted);
            if (decryptedData) {
                const user: IUser = JSON.parse(decryptedData);
                return user;
            }
        }
        return null;
    }
}

export default UserHelper;
