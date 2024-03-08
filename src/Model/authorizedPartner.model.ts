import { Dayjs } from "dayjs";

export interface IAuthorizedPartner {
  id?: string;
  key?: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  expirationDate: Dayjs;
  status: boolean;
  role: string;
  password: string;
  confirmPassword: string;
}
export interface IAuthorizedPartnerState {
  loading: boolean;
  error?: string | undefined;
  authorizedPartner: IAuthorizedPartner[] | null;
  currentAuthorizedPartner: IAuthorizedPartner | null;
}
