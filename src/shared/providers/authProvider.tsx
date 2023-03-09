import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ChildrenProp {
  children: ReactNode;
}

interface Update {
  title?: string;
  year?: string;
  mileage?: number;
  price?: number;
  description?: string;
  typeAnnouncement?: string;
  typeVehicle?: string;
}

interface Comment {
  text: string;
  userId: number;
}

interface ContextProps {
  getAnn: () => void;

  retireAnnouncement: (id: number) => void;

  UpdateAnn: (data: Update, id: number) => void;

  CreateComment: (data: Comment, id: number) => void;

  announcements: any;

  announcement: any;

  handleOpen: () => void;

  handleClose: () => void;

  open: boolean;

  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UpdateContext = createContext<ContextProps>({} as ContextProps);

const updateAuth = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const UpdateProvider = ({ children }: ChildrenProp) => {
  const [announcements, setAnnouncements] = useState<any>([]);
  const [announcement, setAnnouncement] = useState<any>([]);

  useEffect(() => {
    getAnn();
    retireAnnouncement(1);
  }, []);

  const getAnn = async () => {
    await api
      .get("announcements")
      .then((response) =>
        setAnnouncements(JSON.parse(response.request.response))
      )
      .catch(() => {});
  };

  const UpdateAnn = async (data: Update, id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");
    await api
      .patch(`announcements/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then()
      .catch(() => {});
  };

  const CreateComment = async (data: Comment, id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");
    await api
      .post(`announcements/${id}/comments`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {})
      .catch(() => {});
  };

  const retireAnnouncement = async (id: number) => {
    await api
      .get(`announcements/${id}`)
      .then((response) => setAnnouncement(response.data))
      .catch(() => {});
  };

  const editComment = async (data: Comment, id: number, commentId: number) => {
    const token = localStorage.getItem("@MotorsShop:token");
    await api
      .post(`announcements/${id}/comments/${commentId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {})
      .catch(() => {});
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    getAnn();
    setOpen(false);
  };

  return (
    <UpdateContext.Provider
      value={{
        getAnn,
        UpdateAnn,
        CreateComment,
        retireAnnouncement,
        announcements,
        announcement,
        open,
        setOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export { UpdateProvider, updateAuth };
