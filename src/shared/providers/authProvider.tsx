import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
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

  getComments: (id: number) => void;

  retireAnnouncement: (id: number) => void;

  UpdateAnn: (data: Update, id: number) => void;

  deleteAnnouncement: (id: number) => void;

  DeleteComment: (id: number, idComment: number) => void;

  CreateComment: (data: Comment, id: number) => void;

  editComment: (data: any, id: number, commentId: number) => void;

  announcements: any;

  announcement: any;

  comments: any;

  shopping: any;

  setShopping: Dispatch<SetStateAction<any>>;

  handleOpen: () => void;

  handleOpenEdit: (id: number) => void;

  handleClose: () => void;

  open: boolean;

  setOpen: Dispatch<SetStateAction<boolean>>;

  handleOpenDelete: () => void;

  handleCloseDelete: () => void;

  openDelete: boolean;

  UpdateComment: (idComment: number, id: number, data: string) => void;

  setOpenDelete: Dispatch<SetStateAction<boolean>>;
}

const UpdateContext = createContext<ContextProps>({} as ContextProps);

const UpdateAuth = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const token = localStorage.getItem("@MotorsShop:token");

const UpdateProvider = ({ children }: ChildrenProp) => {
  const [announcements, setAnnouncements] = useState<any>([]);
  const [announcement, setAnnouncement] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const [shopping, setShopping] = useState<any>([]);

  useEffect(() => {
    getAnn();
    retireAnnouncement(1);
  }, []);

  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = () => setOpenDelete(true);

  const getAnn = () => {
    api.get("announcements").then((response) => {
      console.log(response.request);
      setAnnouncements(JSON.parse(response.request.response));
    });
  };

  const getComments = (id: number) => {
    api
      .get(`announcements/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setComments(JSON.parse(response.request.response)));
  };

  const UpdateAnn = (data: Update, id: number) => {
    api
      .patch(`announcements/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Anúncio editado com sucesso!", {
          toastId: 1,
        });
      });
  };

  const CreateComment = (data: Comment, id: number) => {
    api
      .post(`announcements/${id}/comments`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.info("Comentário criado", {
          toastId: 1,
        });
      });
  };

  const DeleteComment = (idComment: number, id: number) => {
    api.delete(`announcements/${id}/comments/${idComment}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const UpdateComment = (idComment: number, id: number, dataT: any) => {
    const data = { data: dataT };
    api.patch(`announcements/${id}/comments/${idComment}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const retireAnnouncement = (id: number) => {
    api
      .get(`announcements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setAnnouncement(response.data));
  };

  const deleteAnnouncement = (id: number) => {
    api
      .delete(`announcements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.info("Anúncio deletado!", {
          toastId: 1,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          toastId: 1,
        });
      });
  };

  const editComment = async (data: Comment, id: number, commentId: number) => {
    await api.post(`announcements/${id}/comments/${commentId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleOpenEdit = (id: number) => {
    retireAnnouncement(id);
    setTimeout(() => {
      handleOpen();
    }, 100);
  };
  const handleClose = () => {
    getAnn();
    setOpen(false);
  };

  return (
    <UpdateContext.Provider
      value={{
        DeleteComment,
        UpdateComment,
        getAnn,
        getComments,
        UpdateAnn,
        CreateComment,
        editComment,
        deleteAnnouncement,
        retireAnnouncement,
        announcements,
        announcement,
        comments,
        open,
        shopping,
        setShopping,
        setOpen,
        handleOpen,
        handleOpenEdit,
        handleClose,
        handleCloseDelete,
        handleOpenDelete,
        openDelete,
        setOpenDelete,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export { UpdateProvider, UpdateAuth };
