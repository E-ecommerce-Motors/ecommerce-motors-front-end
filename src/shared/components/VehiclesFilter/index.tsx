import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../styles/theme";
import { IUserData } from "../../interfaces/user";
import { CreateAnnouncementContext } from "../../providers/AnnouncementProvider";
import { UserContext } from "../../providers/UserProvider";
import { api } from "../../services/api";
import { ButtonBig } from "../Button/styles";
import { CreateAnnouncementModal } from "../CreateAnnouncementModal";
import { GenericModal } from "../GenericModal/GenericModal";
import {
  ContentButtons,
  ContentFilter,
  ContentProfile,
  ContentText,
  Profile,
  User,
  Icon,
  Name,
  Description,
} from "./styles";

export const VehiclesFilter = () => {
  const { onSubmitUpdate, onSubmitDelete, getUser, userData, showModal, setShowModal, handleOpenModal, modalContent, setModalContent, closeModal, setUserData } = useContext(UserContext);

  const { toggleModal, isOpen } = useContext(CreateAnnouncementContext);

  const token = localStorage.getItem("@MotorsShop:token");

  useEffect(() => {
    api
      .get("user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch(() => {});
  }, [token]);

  const user = userData || {};
  const name = user.name ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1) : "";
  const icon2 = name[1] ? name[1].slice(0, 1) : "";

  return (
    <>
      {isOpen && <CreateAnnouncementModal />}
      {token ? (
        <ContentProfile>
          <Profile key={userData?.id}>
            <User>
              <Icon>{`${icon1}${icon2}`}</Icon>
              <Name>
                <p>{userData?.name}</p>
                <span>
                  {userData?.typeAccount === "buyer"
                    ? "Comprador"
                    : "Anunciante"}
                </span>
              </Name>
            </User>
            <Description>{userData?.description}</Description>
            {userData?.typeAccount === "advertiser" && (
              <ButtonBig
                bg={theme.colors.whiteFixed}
                button={theme.button.big}
                color={theme.colors.brand1}
                border={theme.colors.brand1}
                size={theme.size.button_medium_text}
                weight={theme.weight.button_medium_text}
                colorHover={theme.colors.whiteFixed}
                bgHover={theme.colors.brand1}
                borderHover={theme.colors.brand1}
                onClick={() => toggleModal()}
              >
                Criar anúncio
              </ButtonBig>
            )}
          </Profile>
        </ContentProfile>
      ) : (
        <ContentFilter>
          <ContentText>
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <span>Um ambiente feito para você explorar o seu melhor</span>
          </ContentText>
          <ContentButtons>
            <ButtonBig
              bg={theme.colors.brand2}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              border={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              colorHover={theme.colors.grey0}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.whiteFixed}
            >
              Carros
            </ButtonBig>
            <ButtonBig
              bg={theme.colors.brand2}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              border={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              colorHover={theme.colors.grey0}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.whiteFixed}
            >
              Motos
            </ButtonBig>
          </ContentButtons>
        </ContentFilter>
      )}
    </>
  );
};
