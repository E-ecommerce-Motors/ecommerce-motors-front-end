import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { EditUserModal } from "../EditUserModal";
import { GenericModal } from "../GenericModal/GenericModal";
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
  const { logout, modalContent, setModalContent, setShowModal, showModal, handleOpenModal } = useContext(UserContext);

    // const auth: string = "authenticated";
    // const user: string = "Lucas Galvs";
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
                <OptionsProfile type="button" onClick={() => handleOpenModal(<GenericModal><EditUserModal/></GenericModal>)}>Editar Perfil</OptionsProfile>
                <OptionsProfile>Editar Endereço</OptionsProfile>
                <OptionsProfile>Minhas Compras</OptionsProfile>
                <OptionsProfile onClick={() => logout()} >Sair</OptionsProfile>
              </MenuBox>
              {showModal && modalContent}
            </Profile>
          </>
        )}
      </Urls>
    </Container>
  );
};
