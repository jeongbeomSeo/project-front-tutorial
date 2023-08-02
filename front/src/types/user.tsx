export interface IForm {
  email: string;
  name: string;
  password: string;
  password1: string;
  isManager: boolean;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
  isManager: boolean;
}

export interface IUsers {
  users: IUser[];
}
