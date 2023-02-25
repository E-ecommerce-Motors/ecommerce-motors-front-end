import React, { createContext, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Carro");
  const [selectedOffer, setSelectedOffer] = useState("Leilao");
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (option: string) => {
    setSelectedType(option);
  };

  const handleOfferClick = (offer: string) => {
    setSelectedOffer(offer);
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
