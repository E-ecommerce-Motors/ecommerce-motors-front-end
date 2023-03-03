import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
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
  Mobile,
  ContainerMobile,
} from "./styles";

interface Props {
  auth: "default" | "authenticated";
  user: string;
}

export const NavBar = ({ auth, user }: Props) => {
  const { logout } = useContext(UserContext);

  const name = user.split(" ");
  const [openProfile, setOpenProfile] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  return (
    <Container mobile={navMobile}>
      <ContainerMobile mobile={navMobile}>
        <Text to="/"></Text>
        <Mobile>
          <input
            onClick={() => setNavMobile(!navMobile)}
            type="checkbox"
            id="mobile"
          />
          <label htmlFor="mobile" />
          <span />
        </Mobile>
      </ContainerMobile>
      <Urls authenticaded={auth} mobile={navMobile}>
        <Option authenticaded={auth}>Carros</Option>
        <Option authenticaded={auth}>Motos</Option>
        <Option authenticaded={auth}>Leilão</Option>

        {auth == "default" ? (
          <>
            <Line />
            <SignIn to="/session">Fazer Login</SignIn>
            <SignUp to="/register">Cadastrar</SignUp>
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
                <OptionsProfile onClick={() => logout()} >Sair</OptionsProfile>
              </MenuBox>
            </Profile>
          </>
        )}
      </Urls>
    </Container>
  );
};
