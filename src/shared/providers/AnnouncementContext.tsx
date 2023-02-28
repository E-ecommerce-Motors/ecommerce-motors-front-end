import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { api } from "../services/api";

type CreateAnnouncementContextType = {
  toggleModal: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  CreateAnn: any;
  year: number | undefined;
  setYear: Dispatch<SetStateAction<number | undefined>>;
  mileage: number | undefined;
  setMileage: Dispatch<SetStateAction<number | undefined>>;
  title: string | undefined;
  setTitle: Dispatch<SetStateAction<string | undefined>>;
  price: number | undefined;
  setPrice: Dispatch<SetStateAction<number | undefined>>;
  description: string | undefined;
  setDescription: Dispatch<SetStateAction<string | undefined>>;
  type: string | undefined;
  setType: Dispatch<SetStateAction<string | undefined>>;
  tA: string | undefined;
  setTA: Dispatch<SetStateAction<string | undefined>>;
  handleAddFieldsClick: () => void;
  handleAdditionalFieldChange:any;
  additionalFields: any;
  setAdditionalFields: any;
  numAdditionalFields: number, setNumAdditionalFields:any;
  img: string|undefined;
  setImg: Dispatch<SetStateAction<string|undefined>>
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
  const [numAdditionalFields, setNumAdditionalFields] = useState<number>(0);
  const [additionalFields, setAdditionalFields] = useState<string[]>([]);
  const [year, setYear] = useState<number>();
  const [change, setChange] = useState(true);
  const [mileage, setMileage] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>();
  const [type, setType] = useState<string>();
  const [tA, setTA] = useState<string>();
  const[img, setImg] = useState<string>();

  const handleAddFieldsClick = () => {
    setNumAdditionalFields(numAdditionalFields + 1);
    setAdditionalFields([...additionalFields, ""]);
  };

  const handleAdditionalFieldChange = (index: number, e: any) => {
    const newFields = [...additionalFields];
    newFields[index] = e.target.value;
    setAdditionalFields(newFields);
  };

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
        year,
        setYear,
        mileage,
        setMileage,
        title,
        setTitle,
        price,
        setPrice,
        description,
        setDescription,
        type,
        setType,
        tA,
        setTA,
        handleAddFieldsClick,
        handleAdditionalFieldChange,
        additionalFields,
        setAdditionalFields,
        numAdditionalFields,
        setNumAdditionalFields,
        img,
        setImg
      }}
    >
      {children}
    </CreateAnnouncementContext.Provider>
  );
};

export default CreateAnnouncementProvider;
