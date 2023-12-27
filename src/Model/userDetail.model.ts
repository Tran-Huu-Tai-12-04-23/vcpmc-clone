import { Dayjs } from 'dayjs';

enum Role {
    ADMIN,
    USER,
}
export interface IUserDetail {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: Dayjs;
    role?: Role;
    userId: string;
}
