import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../styles/theme";
import { IUserData } from "../../interfaces/user";
import { CreateAnnouncementContext } from "../../providers/AnnouncementProvider";
import { UserContext } from "../../providers/UserProvider";
import { api } from "../../services/api";
import { ButtonBig } from "../Button/styles";
import { CreateAnnouncementModal } from "../CreateAnnouncementModal";
import {
  ContentButtons,
  ContentFilter,
  ContentProfile,
  ContentText,
  Profile,
  User,
  Icon,
  Name,
} from "./styles";

export const VehiclesFilter = () => {
  const { userData, setUserData } = useContext(UserContext);

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
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  return (
    <>
      {isOpen && <CreateAnnouncementModal />}
      {token ? (
        <ContentProfile>
          <Profile key={userData.id}>
            <User>
              <Icon>
                {userData.name ? userData.name.slice(0, 2).toUpperCase() : ""}
              </Icon>
              <Name>
                <p>{userData.name}</p>
                <span>
                  {userData.typeAccount === "buyer"
                    ? "Comprador"
                    : "Anunciante"}
                </span>
              </Name>
            </User>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis perspiciatis autem optio, eveniet cumque alias aliquam quam harum dolor facere ea. Dolorem, voluptates? Placeat sed voluptatibus enim praesentium voluptates!</p>
            {userData.typeAccount === "advertiser" && (
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
