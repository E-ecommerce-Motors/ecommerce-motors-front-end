import { theme } from "../../../styles/theme";
import { ButtonBig } from "../button/styles";
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
interface Props {
  auth: "default" | "authenticated";
  user: string;
}
export const VehiclesFilter = ({ auth, user }: Props) => {
  const name = user.split(" ");

  return (
    <>
      {auth == "default" ? (
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
      ) : (
        <ContentProfile>
          <Profile>
            <User>
              <Icon>{`${name[0].slice(0, 1)}${name[1].slice(0, 1)}`}</Icon>
              <Name>
                {user}
                <span>Anunciante</span>
              </Name>
            </User>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              impedit earum est perferendis repellendus autem, vel reprehenderit
             
            </p>
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
            >
              Criar anúncio
            </ButtonBig>
          </Profile>
        </ContentProfile>
      )}
    </>
  );
};
