import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ILoginData,
  IProps,
  IRegisterData,
  IUserData,
} from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  logout: () => void;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitRegister: (data: IRegisterData) => void;
}

export const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const onSubmitLogin = (data: ILoginData) => {
    api
      .post("session", data)
      .then((res) => {
        localStorage.setItem("@MotorsShop:token", res.data.token);

        setTimeout(() => {
          navigate("/");
        }, 1000);

        toast.success("Logado com sucesso, redirecionando!", {
          toastId: 1,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };

  const onSubmitRegister = (data: IRegisterData) => {
    console.log(data);
    api
      .post("user", data)
      .then(() => {
        toast.success("Conta criada com sucesso!", {
          toastId: 1,
        });
        navigate("/session");
      })
      .catch((err) => {
        toast.error(err.message, {
          toastId: 1,
        });
      });
  };

  return (
    <UserContext.Provider value={{ logout, onSubmitLogin, onSubmitRegister }}>
      {children}
    </UserContext.Provider>
  );
};
