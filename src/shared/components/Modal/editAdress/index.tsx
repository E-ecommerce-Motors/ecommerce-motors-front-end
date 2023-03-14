import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
  const { userData, onSubmitUpdateAddress, getUser, setOpenAdress } =
    useContext(UserContext);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressUpdate>({});

  const submit = async (data: IAddressUpdate) => {
    onSubmitUpdateAddress(data);
    getUser();
  };

  const token = localStorage.getItem("@MotorsShop:token");

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <Container>
      <Header>
        <Heading>Editar endereço</Heading>
        <IconButton onClick={() => setOpenAdress(false)}>
          <CloseIcon />
        </IconButton>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Informações de endereço</Type>
        <AddressContent>
          <Title>CEP</Title>
          <Input
            placeholder={userData.Address?.cep}
            width={"big"}
            {...register("cep")}
          />
        </AddressContent>
        <ContentInput>
          <AddressContent>
            <Title>Estado</Title>
            <Input
              placeholder={userData.Address?.state}
              width={"medium"}
              {...register("state")}
            />
          </AddressContent>
          <AddressContent>
            <Title>Cidade</Title>
            <Input
              placeholder={userData.Address?.city}
              width={"medium"}
              {...register("city")}
            />
          </AddressContent>
        </ContentInput>
        <AddressContent>
          <Title>Rua</Title>
          <Input
            placeholder={userData.Address?.street}
            width={"big"}
            {...register("street")}
          />
        </AddressContent>

        <ContentInput>
          <AddressContent>
            <Title>Número</Title>
            <Input
              placeholder={userData.Address?.number}
              width={"medium"}
              {...register("number")}
            />
          </AddressContent>
          <AddressContent>
            <Title>Complememento</Title>
            <Input
              placeholder={userData.Address?.complement}
              width={"medium"}
              {...register("complement")}
            />
          </AddressContent>
        </ContentInput>
        <FlexBtn>
          <Button onClick={() => setOpenAdress(false)}>Cancelar</Button>
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
