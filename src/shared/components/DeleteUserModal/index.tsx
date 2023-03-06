import { useContext } from "react";
import { useForm } from "react-hook-form";
import { theme } from "../../../styles/theme";
import { ButtonBig } from ".././Button/styles";
import { IUserUpdate } from "../../interfaces/user";
import { UserContext } from "../../providers/UserProvider";
import { CloseButton } from "../CreateAnnouncementModal/style";
import { FlexBtn, Header, Type } from "../Modal/editAnnouncement/styles";
import { Button, Container, Content, Para, SectionTitle } from "./styles";

export const DeleteUserModal = () => {
  const {
    onSubmitDelete,
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
