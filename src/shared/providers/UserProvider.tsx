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
  IUserUpdate,
} from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  logout: () => void;

  userData: IUserData;

  setUserData: Dispatch<SetStateAction<IUserData>>;

  recovery: boolean;

  setRecovery: Dispatch<SetStateAction<boolean>>;

  showModal: any;

  setShowModal: Dispatch<SetStateAction<any>>;

  closeModal: () => void;

  modalContent: any;

  setModalContent: Dispatch<SetStateAction<any>>;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitUpdate: (data: IUserUpdate, id: number) => void;

  onRecoveryPassword: (email: string) => void;

  onSubmitDelete: (id: number) => void;

  getUser: () => void;

  handleOpenModal: (modalContent: any) => void;
}

export const UserProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<IUserData>({} as IUserData);

  const [recovery, setRecovery] = useState(false);

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
      .catch(() => {});
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (modalContent: any) => {
    setShowModal(true);
    setModalContent(modalContent);
  };

  const closeModal = () => {
    console.log(showModal)
    setShowModal(false)
    console.log(showModal)
  }

  const onSubmitUpdate = async (data: IUserUpdate, id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");

    removeEmptyFields(data);

    api
      .patch(`user/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Perfil atualizado com sucesso!", {
          toastId: 1,
        });
      })

      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };
  const onSubmitDelete = async (id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");

    api
      .delete(`user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        toast.success("Perfil excluído com sucesso!", {
          toastId: 1,
        });
      })

      .catch((err: any) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
      closeModal()
      logout()
  };

  const onRecoveryPassword = (email: string) => {
    api
      .post("recovery", email)
      .then(() => {
        toast.success("A senha nova foi enviado no seu E-mail!", {
          toastId: 1,
        });
        setRecovery(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          toastId: 1,
        });
      });
  };


  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        logout,
        onSubmitLogin,
        onSubmitRegister,
        onSubmitUpdate,
        onRecoveryPassword,
        onSubmitDelete,
        modalContent,
        userData,
        setUserData,
        recovery,
        setRecovery,
        setModalContent,
        showModal,
        setShowModal,
        closeModal,
        getUser,
        handleOpenModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
