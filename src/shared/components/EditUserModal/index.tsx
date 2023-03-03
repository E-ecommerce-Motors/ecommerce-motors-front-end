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
import DeleteAnnouncementModal from "../DeleteAnnouncementModal";
import { DeleteUserModal } from "../DeleteUserModal";
import { Modal } from "@mui/material";
import { GenericModal } from "../GenericModal/GenericModal";

interface User {
  id: number;
}

export const EditUserModal = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [description, setDescription] = useState("");

  const schema = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().optional(),
    cpf: yup.string().optional(),
    phone: yup.string().optional(),
    birthdDate: yup.string().optional(),
    description: yup.string().optional(),
  });
  const { onSubmitUpdate, getUser, userData, showModal, setShowModal, handleOpenModal, modalContent, setModalContent, closeModal } = useContext
  (UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: IUserUpdate) => {
    onSubmitUpdate(data, userData?.id);
  };
  
  
  getUser()

  return (
    <ModalWrapper>
      <Container>
        <Header>
          <Heading>Editar perfil</Heading>
          <CloseButton type="button" onClick={setModalContent}>x</CloseButton>
        </Header>
        <Content onSubmit={handleSubmit(submit)}>
          <Type>Informações pessoais</Type>

          <Title>Nome:</Title>
          <Input
            placeholder={userData?.name}
            width={"big"}
            {...register("name")}
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Title>Email:</Title>
          <Input
            placeholder={userData?.email}
            width={"big"}
            {...register("email")}
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Title>CPF:</Title>
          <Input
            placeholder={userData?.cpf}
            width={"big"}
            {...register("cpf")}
            value={cpf}
            type="text"
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
          <Title>Celular:</Title>
          <Input
            placeholder={userData?.phone}
            width={"big"}
            {...register("phone")}
            value={phone}
            type="text"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          <Title>Data de Nascimento:</Title>
          <Input
            placeholder={userData?.birthDate}
            width={"big"}
            {...register("birthDate")}
            value={birthDate}
            type="text"
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
          <ErrorMessage>{errors.birthDate?.message}</ErrorMessage>
          <Title>Descrição</Title>
          <TextArea
            placeholder={userData?.description}
            {...register("description")}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
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
              type="button"
              onClick={closeModal}
            >
              Cancelar
            </ButtonBig>
            <ButtonBig
              bg={theme.colors.brand1}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.brand1}
              bgHover={theme.colors.brand2}
              borderHover={theme.colors.brand2}
              colorHover={theme.colors.whiteFixed}
              disable="sim"
              type="submit"
              onClick={() =>
                setTimeout(() => {
                  close();
                }, 200)
              }
            >
              Salvar alterações
            </ButtonBig> 
          </FlexBtn>
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
              style={{ width: '100%' }}
              type="button"
              onClick={() => handleOpenModal(<GenericModal><DeleteUserModal/></GenericModal>)}
            >
              Excluir perfil
            </ButtonBig>
        </Content>
            {showModal && modalContent}
      </Container>
    </ModalWrapper>
  );
};
