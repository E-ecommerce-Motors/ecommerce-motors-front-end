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
  UpdateAnn: (data: Update, id: number) => void;
  CreateComment: (data: Comment, id: number) => void;
  announcements: any;
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

  useEffect(() => {
    getAnn();
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
    await api
      .post(`announcements/${id}/comments`, data)
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  };

  return (
    <UpdateContext.Provider
      value={{ getAnn, UpdateAnn, CreateComment, announcements }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export { UpdateProvider, updateAuth };
