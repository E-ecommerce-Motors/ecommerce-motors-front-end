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
  const { onSubmitUpdate, getUser, userData } = useContext
  (UserContext);
  const { toggleModal, isOpen } = useContext(CreateAnnouncementContext);

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

  const token = localStorage.getItem("@MotorsShop:token");
  api
  getUser()

  return (
    <ModalWrapper>
      <Container>
        <Header>
          <Heading>Editar perfil</Heading>
          <CloseButton type="button">x</CloseButton>
        </Header>
        <Content onSubmit={handleSubmit(submit)}>
          <Type>Informações pessoais</Type>

          <Title>Nome:</Title>
          <Input
            placeholder={"Digite o novo nome de usuário"}
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
            placeholder={"Digite seu novo email"}
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
            placeholder={"Digite seu novo cpf"}
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
            placeholder={"Digite seu celular"}
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
            placeholder={"Digite sua data de nascimento"}
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
            placeholder={"Digite a descrição"}
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
            >
              Excluir anúncio
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
        </Content>
      </Container>
    </ModalWrapper>
  );
};
