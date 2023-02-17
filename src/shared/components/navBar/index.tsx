import { useState } from "react";
import {
  Container,
  Option,
  SignIn,
  SignUp,
  Urls,
  Line,
  Text,
  Icon,
  Name,
  User,
  MenuBox,
  Profile,
  OptionsProfile,
} from "./style";

interface Props {
  auth: "default" | "authenticated";
  user: string;
}

export const NavBar = ({ auth, user }: Props) => {
  //   const auth: string = "authenticated";
  //   const user: string = "Lucas Galvs";
  const name = user.split(" ");
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <Container>
      <Text></Text>
      <Urls authenticaded={auth}>
        <Option authenticaded={auth}>Carros</Option>
        <Option authenticaded={auth}>Motos</Option>
        <Option authenticaded={auth}>Leilão</Option>

        {auth == "default" ? (
          <>
            <Line />
            <SignIn>Fazer Login</SignIn>
            <SignUp>Cadastrar</SignUp>
          </>
        ) : (
          <>
            <Line />
            <Profile>
              <User onMouseOver={() => setOpenProfile(true)}>
                <Icon>{`${name[0].slice(0, 1)}${name[1].slice(0, 1)}`}</Icon>
                <Name>{user}</Name>
              </User>
              <MenuBox
                open={openProfile}
                onMouseLeave={() => setOpenProfile(false)}
              >
                <OptionsProfile>Editar Perfil</OptionsProfile>
                <OptionsProfile>Editar Endereço</OptionsProfile>
                <OptionsProfile>Minhas Compras</OptionsProfile>
                <OptionsProfile>Sair</OptionsProfile>
              </MenuBox>
            </Profile>
          </>
        )}
      </Urls>
    </Container>
  );
};
