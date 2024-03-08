export interface IRole {
  rangleRole: any;
  id?: string;
  key?: string;
  numberUser: number;
  description: string;
  nameRole: string;
  function: RoleType[];
  isDefault: boolean;
}

export interface IRoleState {
  loading: boolean;
  error?: string | undefined;
  roles: IRole[];
  currentRole: IRole | null;
}

export type RoleType = { name: string; key: number; code: string };
