import { useContext } from "react";
import { theme } from "../../../styles/theme";
import { useForm } from "react-hook-form";
import { UserContext, UserProvider } from "../../providers/UserProvider";
import { CloseButton } from "../CreateAnnouncementModal/style";
import * as yup from "yup";
import {
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
import { Button, Container, Content, Para, SectionTitle } from "./styles";
import { ButtonBig } from ".././Button/styles";

import { IUserUpdate } from "../../interfaces/user";

export const DeleteUserModal = () => {
  const {
    onSubmitUpdate,
    onSubmitDelete,
    getUser,
    userData,

    logout,
  } = useContext(UserContext);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>();

  const submit = async () => {
    onSubmitDelete(userData?.id);
  };

  return (

    <Container>
      <Header>
        <SectionTitle>Deletar usúario</SectionTitle>
        <CloseButton type="button">x</CloseButton>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Atenção!</Type>

        <Para>
          Você tem certeza que deseja excluir sua conta permanentemente? essas
          alterações não poderão ser desfeitas.
        </Para>

        <FlexBtn style={{ marginBottom: "20px" }}>
          <Button>Cancelar</Button>
          <ButtonBig
            bg={theme.colors.alert2}
            button={theme.button.big}
            color={theme.colors.alert1}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.alert2}
            bgHover={theme.colors.alert3}
            borderHover={theme.colors.alert3}
            colorHover={theme.colors.alert1}
            disable="sim"
            type="submit"
            onClick={() =>
              setTimeout(() => {
                logout();
              }, 200)
            }
          >
            Excluir Perfil
          </ButtonBig>
        </FlexBtn>
      </Content>
    </Container>

  );
};
