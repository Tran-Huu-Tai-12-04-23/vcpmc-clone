import { Dayjs } from "dayjs";

export interface IDevice {
  id?: string;
  name: string;
  SKU_ID: string;
  macAddress: string;
  warrantyPeriod: Dayjs;
  label: string;
  information: string[];
  note: string;
  username: string;
  password: string;
  confirmPassword: string;
  location: string;
}
export interface IDeviceState {
  loading: boolean;
  error?: string | undefined;
  data: IDevice[] | null;
  currentDevice: IDevice | null;
}
