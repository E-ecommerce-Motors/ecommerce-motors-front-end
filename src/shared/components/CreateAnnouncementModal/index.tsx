import React, { useContext } from "react";
import TextFieldInput from "../TextFieldInput";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  SelectableButton,
} from "./style";
import CreateAnnouncementProvider, {
  CreateAnnouncementContext,
} from "../../providers/AnnouncementContext";
import { toast } from "react-toastify";

// typeAnnouncement,
//         title,
//         year,
//         mileage,
//         price,
//         description,
//         typeVehicle,

const CreateAnnouncementModal = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    api
      .post("announcements", data)
      .then((res) => {
        toast.success("Aoba, bão?");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const {
    selectedType,
    selectedOffer,
    toggleModal,
    handleTypeClick,
    handleOfferClick,
    isOpen,
  } = useContext(CreateAnnouncementContext);

  

  return (
    <>
      <button className="normalButton" onClick={toggleModal}>
        Open Modal
      </button>
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="headerContent">
                <h4>Criar Anúncio</h4>
                <CloseButton onClick={toggleModal} type="button">x</CloseButton>
              </div>
              <h5>Tipo de Anúncio</h5>
              <div className="selectableContainer">
                <SelectableButton
                  onClick={() => handleOfferClick("Leilao")}
                  isSelected={selectedOffer === "Leilao"}
                  {...register("auction")}
                  type="button"
                >
                  Leilão
                </SelectableButton>
                <SelectableButton
                  onClick={() => handleOfferClick("Venda")}
                  isSelected={selectedOffer === "Venda"}
                  {...register("sale")}
                  type="button"
                >
                  Venda
                </SelectableButton>
              </div>
              <div className="carInfo">
                <h5>Informações do veículo</h5>
                <TextFieldInput
                  labelText="Título"
                  placeholderText="Digitar título"
                  {...register("title")}
                />
                <div className="yearKmPrice">
                  <TextFieldInput
                    labelText="Ano"
                    placeholderText="Digitar ano"
                    {...register("year")}
                  />
                  <TextFieldInput
                    labelText="Quilometragem"
                    placeholderText="0"
                    {...register("kilometer")}
                  />
                  <TextFieldInput
                    labelText="Preço"
                    placeholderText="Digitar Preço"
                    {...register("price")}
                  />
                </div>
                <TextFieldInput
                  labelText="Descrição"
                  placeholderText="Digitar Descrição"
                  multilineOption={true}
                  maxRowsNumber={2}
                  inputHeight={80}
                  {...register("description")}
                />
                <h5>Tipo de veículo</h5>
                <div className="selectableContainer">
                  <SelectableButton
                    onClick={() => handleTypeClick("Carro")}
                    isSelected={selectedType === "Carro"}
                    {...register("car")}
                    type="button"
                  >
                    Carro
                  </SelectableButton>
                  <SelectableButton
                    onClick={() => handleTypeClick("Moto")}
                    isSelected={selectedType === "Moto"}
                    {...register("motorcycle")}
                    type="button"
                  >
                    Moto
                  </SelectableButton>
                </div>
                <TextFieldInput
                  labelText="Descrição"
                  placeholderText="Digitar Descrição"
                  
                  
                  inputHeight={80}
                  {...register("description")}
                />
                <TextFieldInput
                  labelText="Descrição"
                  placeholderText="Digitar Descrição"
                  
                  
                  {...register("description")}
                />
                <div className="createCancel">
                  <button type="submit">Criar Anúncio</button>
                  <button type="button">Cancelar</button>
                </div>
              </div>
            </form>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default CreateAnnouncementModal;
