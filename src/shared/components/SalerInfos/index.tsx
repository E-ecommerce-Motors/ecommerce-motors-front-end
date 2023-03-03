import { Container, SectionTitle, Icon, TextArea } from "./styles";
import { updateAuth } from "../../providers/authProvider";
import { ButtonBig } from "../Button/styles";
import { theme } from "../../../styles/theme";

export const SalerInfo = () => {
  const { announcement } = updateAuth();

  return (
    <Container>
      <Icon>{`${announcement.user.name.slice(
        0,
        1
      )}${announcement.user.name.slice(0, 1)}`}</Icon>
      <SectionTitle>{announcement.user.name}</SectionTitle>
      <TextArea>{announcement.user.description}</TextArea>
      <ButtonBig
        bg={theme.colors.grey0}
        button={theme.button.big}
        color={theme.colors.whiteFixed}
        size={theme.size.button_big_text}
        weight={theme.weight.button_big_text}
        border={theme.colors.grey0}
        bgHover={theme.colors.grey1}
        borderHover={theme.colors.grey1}
        colorHover={theme.colors.whiteFixed}
        style={{ width: "206px" }}
      >
        Ver todos anuncios
      </ButtonBig>
    </Container>
  );
};
