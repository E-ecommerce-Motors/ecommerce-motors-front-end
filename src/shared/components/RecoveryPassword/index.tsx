import { Content, ContentInput, Heading } from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Title } from "../Carousel/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../SessionForm/styles";
import { Input, SubTitle } from "../RegisterForm/styles";
import { ModalWrapper } from "../CreateAnnouncementModal/style";
import { UserContext } from "../../providers/UserProvider";
import { IconButton } from "@mui/material";

export const RecoveryPassword = () => {
  const { onRecoveryPassword, setRecovery } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  return (
    <ModalWrapper>
      <Content onSubmit={handleSubmit(onRecoveryPassword)}>
        <Heading>
          <Title>Recuperar senha</Title>
          <IconButton onClick={() => setRecovery(false)}>
            <CloseIcon />
          </IconButton>
        </Heading>
        <ContentInput>
          <SubTitle>Informe o email</SubTitle>
          <Input
            type="text"
            placeholder="Digitar email"
            {...register("email")}
          />
        </ContentInput>
        <Button type="submit">Enviar</Button>
      </Content>
    </ModalWrapper>
  );
};
