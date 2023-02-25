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

const CreateAnnouncementModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post("announcements", data);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const {
    selectedType,
    selectedOffer,
    toggleModal,
    handleTypeClick,
    handleOfferClick,
    isOpen,
    setIsOpen
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
                <CloseButton onClick={toggleModal}>x</CloseButton>
              </div>
              <h5>Tipo de Anúncio</h5>
              <div className="selectableContainer">
                <SelectableButton
                  onClick={() => handleOfferClick("Leilao")}
                  isSelected={selectedOffer === "Leilao"}
                >
                  Leilão
                </SelectableButton>
                <SelectableButton
                  onClick={() => handleOfferClick("Venda")}
                  isSelected={selectedOffer === "Venda"}
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
                  >
                    Carro
                  </SelectableButton>
                  <SelectableButton
                    onClick={() => handleTypeClick("Moto")}
                    isSelected={selectedType === "Moto"}
                  >
                    Moto
                  </SelectableButton>
                </div>
                <div className="createCancel">
                  <button type="submit">Criar Anúncio</button>
                  <button>Cancelar</button>
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
