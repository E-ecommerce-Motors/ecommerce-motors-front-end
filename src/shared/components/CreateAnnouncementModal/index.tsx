import React, { useState } from "react";
import TextFieldInput from "../TextFieldInput";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  SelectableButton,
} from "./style";

const CreateAnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <button className="normalButton" onClick={toggleModal}>
        Open Modal
      </button>
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
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
              />
              <div className="yearKmPrice">
                <TextFieldInput labelText="Ano" placeholderText="Digitar ano" />
                <TextFieldInput labelText="Quilometragem" placeholderText="0" />
                <TextFieldInput
                  labelText="Preço"
                  placeholderText="Digitar Preço"
                />
              </div>
              <TextFieldInput
                labelText="Descrição"
                placeholderText="Digitar Descrição"
                multilineOption={true}
                maxRowsNumber={2}
                inputHeight={80}
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
                    <button>Criar Anúncio</button>
                    <button>Cancelar</button>
                </div>
            </div>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default CreateAnnouncementModal;
