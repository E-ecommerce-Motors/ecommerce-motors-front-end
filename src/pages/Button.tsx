import { ButtonComponent } from "../shared/components/button";
import { theme } from "../styles/theme";

export const Button = () => {
  return (
    <div>
      <ButtonComponent
        bg={theme.colors.brand1}
        button={theme.button.big}
        color={theme.colors.whiteFixed}
        border={theme.colors.brand1}
        size={theme.size.button_big_text}
        weight={theme.weight.button_big_text}
        colorHover={theme.colors.brand1}
        bgHover={theme.colors.brand3}
        borderHover={theme.colors.brand1}
      />
    </div>
  );
};
