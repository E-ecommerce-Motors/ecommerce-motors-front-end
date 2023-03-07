import { ButtonBig } from "../Button/styles";
import { useContext, useEffect } from "react";
import { theme } from "../../../styles/theme";
import { UserContext } from "../../providers/UserProvider";
import { CreateAnnouncementModal } from "../CreateAnnouncementModal";
import { AnnouncementContext } from "../../providers/AnnouncementProvider";
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
  const { userData, getUser } = useContext(UserContext);

  const { isOpen, toggleModal } = useContext(AnnouncementContext);

  const token = localStorage.getItem("@MotorsShop:token");

  useEffect(() => {
    getUser();
  }, [userData]);

  const user = userData || {};
  const name = user.name ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1).toUpperCase() : "";
  const icon2 = name[1] ? name[1].slice(0, 1).toUpperCase() : "";

  const handleScroll = (anchorId: string, offset: number = 0) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      window.scrollTo({ top: anchor.offsetTop + offset, behavior: "smooth" });
    }
  };

  function handleClick(id: string, offset: number) {
    handleScroll(id, offset);
  }

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
              id="car"
              bg={theme.colors.brand2}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              border={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              colorHover={theme.colors.grey0}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.whiteFixed}
              onClick={() => handleClick("car", 900)}
            >
              Carros
            </ButtonBig>
            <ButtonBig
              id="motorcycle"
              bg={theme.colors.brand2}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              border={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              colorHover={theme.colors.grey0}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.whiteFixed}
              onClick={() => handleClick("motorcycle", 1400)}
            >
              Motos
            </ButtonBig>
          </ContentButtons>
        </ContentFilter>
      )}
    </>
  );
};
