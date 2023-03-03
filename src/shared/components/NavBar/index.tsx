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



export const NavBar = () => {
  const { logout, userData, handleOpenModal, setModalContent, showModal, setShowModal, closeModal, modalContent } = useContext(UserContext);
  const token = localStorage.getItem("@MotorsShop:token");
  const auth = token ? "authenticated" : "default";
  const user = userData || {};
  const name = user.name ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1) : "";
  const icon2 = name[1] ? name[1].slice(0, 1) : "";

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

        {!token ? (
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
                <Icon>{`${icon1}${icon2}`}</Icon>
                <Name>{user.name}</Name>
              </User>
              <MenuBox
                open={openProfile}
                onMouseLeave={() => setOpenProfile(false)}
              >
                <OptionsProfile type="button" onClick={() => handleOpenModal(<GenericModal><EditUserModal/></GenericModal>)}>Editar Perfil</OptionsProfile>
                <OptionsProfile>Editar Endereço</OptionsProfile>
                <OptionsProfile>
                  {userData.typeAccount == "advertiser"
                    ? "Meus Anúncios"
                    : "Minhas Compras"}
                </OptionsProfile>
                <OptionsProfile onClick={() => logout()}>Sair</OptionsProfile>
              </MenuBox>
              {showModal && modalContent}
            </Profile>
          </>
        )}
      </Urls>
    </Container>
  );
};
