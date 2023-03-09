import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { ButtonBig } from "../../Button/styles";
import { theme } from "../../../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../../DeleteUserModal/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../providers/UserProvider";
import { IAddressUpdate } from "../../../interfaces/user";
import { Container, Input, AddressContent, ContentInput } from "./styles";
import {
  Content,
  FlexBtn,
  Header,
  Heading,
  Title,
  Type,
} from "../editAnnouncement/styles";

export const EditAddress = () => {
  const { userData, onSubmitUpdateAddress, getUser, handleCloseAddress } =
    useContext(UserContext);

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

  const submit = async (data: IAddressUpdate) => {
    onSubmitUpdateAddress(data);
    getUser();
  };

  return (
    <Container>
      <Header>
        <Heading>Editar endereço</Heading>
        <IconButton onClick={handleCloseAddress}>
          <CloseIcon />
        </IconButton>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Informações de endereço</Type>
        <AddressContent>
          <Title>CEP</Title>
          <Input
            placeholder={userData.name}
            width={"big"}
            {...register("name")}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </AddressContent>
        <ContentInput>
          <AddressContent>
            <Title>Estado</Title>
            <Input
              placeholder={userData.email}
              width={"medium"}
              {...register("email")}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </AddressContent>
          <AddressContent>
            <Title>Cidade</Title>
            <Input
              placeholder={userData.cpf}
              width={"medium"}
              {...register("cpf")}
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
          </AddressContent>
        </ContentInput>
        <AddressContent>
          <Title>Rua</Title>
          <Input
            placeholder={userData.phone}
            width={"big"}
            {...register("phone")}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </AddressContent>

        <ContentInput>
          <AddressContent>
            <Title>Número</Title>
            <Input
              placeholder={userData.birthDate}
              width={"medium"}
              {...register("birthDate")}
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
          </AddressContent>
          <AddressContent>
            <Title>Complememento</Title>
            <Input
              placeholder={userData.description}
              width={"medium"}
              {...register("description")}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </AddressContent>
        </ContentInput>
        <FlexBtn>
          <Button onClick={handleCloseAddress}>Cancelar</Button>
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
