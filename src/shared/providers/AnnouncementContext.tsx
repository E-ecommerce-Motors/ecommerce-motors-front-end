import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";

type AnnouncementType = string;
type VehicleType = string;

type CreateAnnouncementContextType = {
  selectedType: AnnouncementType;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedOffer: VehicleType;
  setSelectedOffer: React.Dispatch<React.SetStateAction<string>>;
  toggleModal: () => void;
  handleTypeClick: any;
  handleOfferClick: any;
  isOpen: boolean;
  setIsOpen: any;
};

interface ChildrenProp {
  children: React.ReactNode;
}

export const CreateAnnouncementContext = createContext(
  {} as CreateAnnouncementContextType
);

export const CreateAnnouncementProvider = ({ children }: ChildrenProp) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Carro");
  const [selectedOffer, setSelectedOffer] = useState("Venda");
  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleTypeClick = (option: string) => {
    setSelectedType(option);
  };

  const handleOfferClick = (offer: string) => {
    setSelectedOffer(offer);
    setValue("typeAnnouncement", offer === "Leilao" ? "auction" : "sale");
  };

  return (
    <CreateAnnouncementContext.Provider
      value={{
        selectedType,
        setSelectedType,
        selectedOffer,
        setSelectedOffer,
        toggleModal,
        handleTypeClick,
        handleOfferClick,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CreateAnnouncementContext.Provider>
  );
};

export default CreateAnnouncementProvider;
