import { useForm } from "react-hook-form";
import { theme } from "../../../styles/theme";
import { ButtonBig } from "../Button/styles";
import { IUserUpdate } from "../../interfaces/user";
import { FlexBtn, Header, Type } from "../Modal/EditAnnouncement/styles";
import { Button, Container, Content, Para, SectionTitle } from "./styles";
import { UpdateAuth } from "../../providers/authProvider";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const DeleteAnnModal = (id: any) => {
  const { handleCloseDelete, deleteAnnouncement } = UpdateAuth();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>();

  const submit = async () => {
    deleteAnnouncement(id.id);
  };

  return (
    <Container>
      <Header>
        <SectionTitle>Excluir anúncio</SectionTitle>
        <IconButton onClick={handleCloseDelete}>
          <CloseIcon />
        </IconButton>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Tem certeza que deseja remover este anúncio?</Type>
        <Para>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </Para>
        <FlexBtn style={{ marginBottom: "20px" }}>
          <Button onClick={handleCloseDelete}>Cancelar</Button>
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
                handleCloseDelete();
              }, 200)
            }
          >
            Sim, Excluir anúncio
          </ButtonBig>
        </FlexBtn>
      </Content>
    </Container>
  );
};
