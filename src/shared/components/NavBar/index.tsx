import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Box, Modal } from "@mui/material";
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
import { EditUser } from "../Modal/editUser";
import { updateAuth } from "../../providers/authProvider";
import { Link } from "react-router-dom";
import { IUserData } from "../../interfaces/user";
import { EditAddress } from "../Modal/editAdress";

export const NavBar = () => {
  const {
    logout,
    userData,
    setUserData,
    handleOpen,
    handleClose,
    open,
    getUser,
    openAdress,
    setOpenAdress,
    handleOpenAdress,
  } = useContext(UserContext);
  const { retireAnnouncement } = updateAuth();

  const token = localStorage.getItem("@MotorsShop:token");
  const auth = token ? "authenticated" : "default";

  const user = userData || {};
  const name = user.name ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1) : "";
  const icon2 = name[1] ? name[1].slice(0, 1) : "";

  const [openProfile, setOpenProfile] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

<<<<<<< HEAD
  const handleScroll = (anchorId: string, offset: number = 0) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      window.scrollTo({ top: anchor.offsetTop + offset, behavior: "smooth" });
    }
  };

  function handleClick(id: string, offset: number) {
    handleScroll(id, offset);
=======
  const handleScroll = (anchorId: string) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      window.scrollTo({ top: anchor.offsetTop, behavior: "smooth" });
    }
  };

  function handleClick(id: string) {
    handleScroll(id);
>>>>>>> 6d8e03dafbcf3a0806cb4913734b7c8d412e34e2
  }

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
<<<<<<< HEAD
        <Option authenticaded={auth} onClick={() => handleClick("car", 1500)}>
          Carros
        </Option>
        <Option authenticaded={auth} onClick={() => handleClick("motorcycle", 2200)}>
          Motos
        </Option>
        <Option authenticaded={auth} onClick={() => handleClick("auction", 0)}>
          Leilão
        </Option>
=======
        <Option authenticaded={auth} onClick={() => handleClick("car")}>
          Carros
        </Option>
        <Option authenticaded={auth} onClick={() => handleClick("motorcycle")}>
          Motos
        </Option>
        <Option authenticaded={auth} onClick={() => handleClick("auction")}>
          Leilão
        </Option>

>>>>>>> 6d8e03dafbcf3a0806cb4913734b7c8d412e34e2
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
              <User onClick={() => setOpenProfile(!openProfile)}>
                <Icon>{`${icon1}${icon2}`}</Icon>
                <Name>{user?.name}</Name>
              </User>
              <MenuBox
                open={openProfile}
                onMouseLeave={() => setOpenProfile(!openProfile)}
              >
                <OptionsProfile type="button" onClick={handleOpen}>
                  Editar Perfil
                </OptionsProfile>
                <Modal open={open} onClose={handleClose}>
                  <Box>
                    <EditUser />
                  </Box>
                </Modal>

                <OptionsProfile onClick={handleOpenAdress}>
                  Editar Endereço
                </OptionsProfile>
                <Modal open={openAdress} onClose={() => setOpenAdress(false)}>
                  <Box>
                    <EditAddress />
                  </Box>
                </Modal>
                <Link
                  to={
                    userData?.typeAccount == "advertiser"
                      ? `/${userData.id}/myAnnouncements`
                      : `/${userData.id}/myShopping`
                  }
                  style={{ textDecoration: "none" }}
                >
                  <OptionsProfile>
                    {userData?.typeAccount == "advertiser"
                      ? "Meus Anúncios"
                      : "Minhas Compras"}
                  </OptionsProfile>
                </Link>
                <OptionsProfile
                  onClick={() => {
                    logout();
                  }}
                >
                  Sair
                </OptionsProfile>
              </MenuBox>
            </Profile>
          </>
        )}
      </Urls>
    </Container>
  );
};
