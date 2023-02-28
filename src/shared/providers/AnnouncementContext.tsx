import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../services/api";

type CreateAnnouncementContextType = {
  toggleModal: () => void;
  isOpen: boolean;
  setIsOpen: any;
  CreateAnn: any;
};

interface Create {
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeAnnouncement: string;
  typeVehicle: string;
}

interface ChildrenProp {
  children: React.ReactNode;
}

export const CreateAnnouncementContext = createContext(
  {} as CreateAnnouncementContextType
);

export const CreateAnnouncementProvider = ({ children }: ChildrenProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const CreateAnn = async (data: Create) => {
    await api
      .post(`announcements`, data)
      .then()
      .catch((response) => console.log(response));
  };

  return (
    <CreateAnnouncementContext.Provider
      value={{
        toggleModal,
        isOpen,
        setIsOpen,
        CreateAnn,
      }}
    >
      {children}
    </CreateAnnouncementContext.Provider>
  );
};

export default CreateAnnouncementProvider;
