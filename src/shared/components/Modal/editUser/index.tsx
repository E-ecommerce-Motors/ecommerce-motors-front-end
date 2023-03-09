import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import { Box, Modal } from "@mui/material";
import { useContext, useState } from "react";
import { ButtonBig } from "../../Button/styles";
import { theme } from "../../../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../DeleteUserModal/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserUpdate } from "../../../interfaces/user";
import { DeleteUserModal } from "../../DeleteUserModal";
import { updateAuth } from "../../../providers/authProvider";
import { UserContext } from "../../../providers/UserProvider";
import {
  Container,
  Content,
  FlexBtn,
  Header,
  Heading,
  Input,
  TextArea,
  Title,
  Type,
} from "../editAnnouncement/styles";

export const EditUser = () => {
  const { userData, onSubmitUpdate, getUser } = useContext(UserContext);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
<<<<<<< HEAD

  const { openModal, handleOpenModal, handleCloseModal } = updateAuth();
=======
  const { handleCloseDelete, handleOpenDelete, openDelete } = updateAuth();
>>>>>>> 05a8c657a2512557b33e75fc6a086af0b4bd7621

  const { handleClose } = useContext(UserContext);

  const submit = async (data: IUserUpdate) => {
    onSubmitUpdate(data, userData?.id);
    getUser();
  };

  return (
    <Container>
      <Header>
        <Heading>Editar perfil</Heading>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Informações pessoais</Type>
        <Title>Nome</Title>
        <Input
          placeholder={userData.name}
          width={"big"}
          {...register("name")}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Title>Email</Title>
        <Input
          placeholder={userData.email}
          width={"big"}
          {...register("email")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Title>CPF</Title>
        <Input
          placeholder={userData.cpf}
          width={"big"}
          {...register("cpf")}
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
        <Title>Celular</Title>
        <Input
          placeholder={userData.phone}
          width={"big"}
          {...register("phone")}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Title>Data de nascimento</Title>
        <Input
          placeholder={userData.birthDate}
          width={"big"}
          {...register("birthDate")}
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
        />
        <Title>Descrição</Title>
        <TextArea
          placeholder={userData.description}
          {...register("description")}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <FlexBtn>
<<<<<<< HEAD
          <Modal open={openModal} onClose={handleCloseModal}>
=======
          <Modal open={openDelete} onClose={handleCloseDelete}>
>>>>>>> 05a8c657a2512557b33e75fc6a086af0b4bd7621
            <Box>
              <DeleteUserModal />
            </Box>
          </Modal>
<<<<<<< HEAD
          <Button onClick={handleOpenModal}>Deletar Usuário</Button>
=======
          <Button onClick={handleOpenDelete}>Deletar Usuario</Button>
>>>>>>> 05a8c657a2512557b33e75fc6a086af0b4bd7621
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
  );
};
