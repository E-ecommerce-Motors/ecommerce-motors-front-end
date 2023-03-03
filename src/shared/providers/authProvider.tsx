import {
  createContext,
  ReactNode,
  useCallback,
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
    retireAnnouncement(3);
  }, []);

  const getAnn = async () => {
    await api
      .get("announcements")
      .then((response) =>
        setAnnouncements(JSON.parse(response.request.response))
      )
      .catch((response) => console.log(response));
  };

  const UpdateAnn = async (data: Update, id: number) => {
    await api
      .patch(`announcements/${id}`, data)
      .then()
      .catch((response) => console.log(response));
  };

  const CreateComment = async (data: Comment, id: number) => {
    const token = localStorage.getItem("@MotorsShop:token");
    await api
      .post(`announcements/${id}/comments`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  };

  const retireAnnouncement = async (id: number) => {
    await api
      .get(`announcements/${id}`)
      .then((response) => setAnnouncement(response.data))
      .catch((response) => console.log(response));
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
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export { UpdateProvider, updateAuth };
