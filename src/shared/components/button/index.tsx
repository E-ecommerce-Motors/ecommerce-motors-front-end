import { theme } from "../../../styles/theme";
import { ButtonBig } from "./style";

export const Button = () => {
  return (
    <ButtonBig
      bg={theme.colors.brand1}
      button={theme.button.big}
      color={theme.colors.whiteFixed}
      border={theme.colors.brand1}
      font_size={theme.size.button_big_text}
      font_weight={theme.weight.button_big_text}
      colorHover={theme.colors.brand4}
      backgroundHover={theme.colors.brand2}
      borderHover={theme.colors.brand4}
    >
      TEXT
    </ButtonBig>
  );
};
