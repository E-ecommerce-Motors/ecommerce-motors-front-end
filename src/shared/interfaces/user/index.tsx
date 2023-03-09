import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserUpdate {
  id?: number;
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  description?: string;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string;
  typeAccount: string;
  isSaler: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
interface typeAccountOptions {
  typeAccount: "advertiser" | "buyer";
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string;
  typeAccount: typeAccountOptions | string;
  isSaler: boolean;
  password: string;
  confirmPassword: string;
  address: IAddress;
}

export interface IAddressUpdate extends IAddress {
  
}
