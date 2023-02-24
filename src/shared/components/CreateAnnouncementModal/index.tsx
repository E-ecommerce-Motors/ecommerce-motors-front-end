import React, { useState } from "react";
import TextFieldInput from "../TextFieldInput";
import { useForm } from "react-hook-form";
import {api} from "../../services/api"
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  SelectableButton,
} from "./style";

const CreateAnnouncementModal = () => {
const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post("announcements", data);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

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
                    onClick={() => handleOptionClick("buy")}
                    isSelected={selectedOption === "buy"}
                    >
                    Leilão
                  </SelectableButton>
                  <SelectableButton
                    onClick={() => handleOptionClick("sell")}
                    isSelected={selectedOption === "sell"}
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
                    <TextFieldInput labelText="Ano" placeholderText="Digitar ano" {...register("year")}/>
                    <TextFieldInput labelText="Quilometragem" placeholderText="0" {...register("kilometer")}/>
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
                      onClick={() => handleOptionClick("Carro")}
                      isSelected={selectedOption === "Carro"}
                    >
                      Carro
                    </SelectableButton>
                    <SelectableButton
                      onClick={() => handleOptionClick("Moto")}
                      isSelected={selectedOption === "Moto"}
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
