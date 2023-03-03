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

  showModal: any;

  setShowModal: Dispatch<SetStateAction<any>>;

  closeModal: () => void;

  modalContent: any;
  setModalContent: Dispatch<SetStateAction<any>>;

  setUserData: Dispatch<SetStateAction<IUserData>>;

  logout: () => void;

  onSubmitLogin: (data: ILoginData) => void;

  onSubmitUpdate: (data: IUserUpdate, id: number) => void;

  onSubmitDelete: (id: number) => void

  getUser: () => void;

  handleOpenModal: (modalContent: any)=> void
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

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
  const handleOpenModal = (modalContent: any) => {
    setShowModal(true);
    setModalContent(modalContent);
  };

  const closeModal = () => {
    setShowModal(false)
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
  };

  return (
    <UserContext.Provider
      value={{
        logout,
        onSubmitLogin,
        onSubmitUpdate,
        onSubmitDelete,
        userData,
        modalContent,
        setUserData,
        setModalContent,
        showModal,
        setShowModal,
        closeModal,
        getUser,
        handleOpenModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
