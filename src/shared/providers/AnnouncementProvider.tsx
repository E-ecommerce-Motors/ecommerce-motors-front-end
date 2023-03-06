import { api } from "../services/api";
import { toast } from "react-toastify";
import { Create } from "../interfaces/announcement";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type CreateAnnouncementContextType = {
  toggleModal: () => void;

  isOpen: boolean;

  setIsOpen: Dispatch<SetStateAction<boolean>>;

  CreateAnn: any;

  year: number | string;

  setYear: Dispatch<SetStateAction<number | string>>;

  mileage: number | string;

  setMileage: Dispatch<SetStateAction<number | string>>;

  title: string | undefined;

  setTitle: Dispatch<SetStateAction<string>>;

  price: number | string;

  setPrice: Dispatch<SetStateAction<number | string>>;

  description: string | undefined;

  setDescription: Dispatch<SetStateAction<string | undefined>>;

  type: string | undefined;

  setType: Dispatch<SetStateAction<string>>;

  tA: string | undefined;

  setTA: Dispatch<SetStateAction<string>>;

  handleAddFieldsClick: () => void;

  handleAdditionalFieldChange: any;

  additionalFields: any;

  setAdditionalFields: any;

  numAdditionalFields: number;

  setNumAdditionalFields: any;

  img: string[];

  setImg: Dispatch<SetStateAction<string[]>>;

  coverImage: string;

  setCoverImage: Dispatch<SetStateAction<string>>;

  imageGallery: string[];

  setImageGallery: Dispatch<SetStateAction<string[]>>;

  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface ChildrenProp {
  children: React.ReactNode;
}

export const AnnouncementContext = createContext(
  {} as CreateAnnouncementContextType
);

export const AnnouncementProvider = ({ children }: ChildrenProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const [numAdditionalFields, setNumAdditionalFields] = useState(Number);

  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const [year, setYear] = useState<number | string>("");

  const [mileage, setMileage] = useState<number | string>("");

  const [title, setTitle] = useState<string>("");

  const [price, setPrice] = useState<number | string>("");

  const [description, setDescription] = useState<string | undefined>("");

  const [type, setType] = useState<string>("car");

  const [tA, setTA] = useState<string>("sale");

  const [img, setImg] = useState<string[]>([""]);

  const [coverImage, setCoverImage] = useState<string>("");

  const [imageGallery, setImageGallery] = useState<string[]>([""]);

  const handleAddFieldsClick = () => {
    setNumAdditionalFields(numAdditionalFields + 1);
    setAdditionalFields([...additionalFields, ""]);
  };

  const handleAdditionalFieldChange = (index: number, e: any) => {
    const newFields = [...additionalFields];
    newFields[index] = e.target.value;
    setAdditionalFields(newFields);
  };

  function handleInputChange(event: any) {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    const newImageGallery = [...imageGallery];
    newImageGallery[inputId] = inputValue;

    setImageGallery(newImageGallery);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
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
    toast.success("Anúncio criado com sucesso!");
    toggleModal();
  };

  return (
    <AnnouncementContext.Provider
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
        setImg,
        coverImage,
        setCoverImage,
        imageGallery,
        setImageGallery,
        handleInputChange,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
