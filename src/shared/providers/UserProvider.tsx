import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ILoginData,
  IProps,
  IRegisterData,
  IUserData,
  IUserUpdate,
} from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  logout: () => void;

  userData: IUserData;

  setUserData: Dispatch<SetStateAction<IUserData>>;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitUpdate: (data: IUserUpdate, id: number) => void;

  getUser: () => void;
}

export const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>();

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

  const removeEmptyFields = (data: any) => {
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] == null) {
        delete data[key];
      }
    });
  };

  const getUser = () => {
    const token = localStorage.getItem("@MotorsShop:token");
    api
      .get(`user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmitUpdate = async (data: IUserUpdate, id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");

    removeEmptyFields(data);
    api
      .patch(`user/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        toast.success("Perfil atualizado com sucesso!", {
          toastId: 1,
        });
      })

      .catch((err: any) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        logout,
        onSubmitLogin,
        onSubmitRegister,
        onSubmitUpdate,
        userData,
        setUserData,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
