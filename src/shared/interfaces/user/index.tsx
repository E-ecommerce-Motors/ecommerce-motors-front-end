import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserUpdate{
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
