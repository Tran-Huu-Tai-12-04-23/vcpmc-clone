import CryptoJS from 'crypto-js';

const secretKey = 'your_secret_key';

class Encode {
    static encryptInformation(data: string) {
        const encryptedText = CryptoJS.AES.encrypt(data, secretKey).toString();
        return encryptedText;
    }

    static decryptInformation = (encryptedText: string) => {
        const decryptedText = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
        return decryptedText;
    };
}

export default Encode;
