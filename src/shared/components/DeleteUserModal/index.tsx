import { useContext, useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { useForm } from "react-hook-form";
import { UserContext, UserProvider } from "../../providers/UserProvider";
import {
  CloseButton,
  Container,
  ModalWrapper,
} from "../CreateAnnouncementModal/style";
import * as yup from "yup";
import {
  Content,
  FlexBtn,
  Header,
  Heading,
  Title,
  Type,
  Input,
  Infos,
  Single,
  TextArea,
} from "../Modal/editAnnouncement/styles";
import { ButtonBig } from ".././Button/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Create } from "../../interfaces/announcement";
import { IUserUpdate } from "../../interfaces/user";
import { api } from "../../services/api";
import { ErrorMessage } from "../SessionForm/styles";
import { CreateAnnouncementContext } from "../../providers/AnnouncementProvider";
import { GenericModal } from "../GenericModal/GenericModal";

interface User {
  id: number;
}

export const DeleteUserModal = () => {
  

  const { onSubmitUpdate, onSubmitDelete, getUser, userData, showModal, setShowModal, handleOpenModal, modalContent, setModalContent, closeModal } = useContext(UserContext);
  
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>();

  const submit = async () => {
    onSubmitDelete(userData?.id);
  };
  
  getUser()

  return (
    <ModalWrapper>
      <Container>
        <Header>
          <Heading>Editar perfil</Heading>
          <CloseButton type="button" onClick={closeModal}>x</CloseButton>
        </Header>
        <Content onSubmit={handleSubmit(submit)}>
          <Type>Atenção!</Type>

          <p>Você tem certeza que deseja excluir sua conta permanentemente? essas alterações não poderão ser desfeitas.</p>
          
          <FlexBtn>
            <ButtonBig
              bg={theme.colors.grey6}
              button={theme.button.big}
              color={theme.colors.grey2}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.grey6}
              bgHover={theme.colors.grey5}
              borderHover={theme.colors.grey5}
              colorHover={theme.colors.grey2}
              onClick={closeModal}
              type="button"
            >
              Cancelar
            </ButtonBig>
            <ButtonBig
              bg={theme.colors.alert1}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.alert1}
              bgHover={theme.colors.alert1}
              borderHover={theme.colors.alert1}
              colorHover={theme.colors.whiteFixed}
              disable="sim"
              type="submit"
              onClick={() =>
                setTimeout(() => {
                  close();
                }, 200)
              }
            >
              Excluir Perfil
            </ButtonBig>
          </FlexBtn>
        </Content>
      </Container>
    </ModalWrapper>
  );
};
