import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginData, IProps, IUserData, IUserUpdate } from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  userData: IUserData;

  setUserData: Dispatch<SetStateAction<IUserData>>;

  logout: () => void;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitUpdate: (data: IUserUpdate, id: number) => void;
}

export const UserProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<any>();

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
        }, 1500);

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

  const removeEmptyFields = (data: any) => {
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] == null) {
        delete data[key];
      }
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
      value={{ logout, onSubmitLogin, onSubmitUpdate, userData, setUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
