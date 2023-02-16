import { ButtonBig } from "./style";

interface Props {
  bg: string;
  button: string;
  color: string;
  border: string;
  weight: number;
  size: string;
  colorHover: string;
  bgHover: string;
  borderHover: string;
  disable?: boolean;
}

export const ButtonComponent = ({
  bg,
  button,
  color,
  border,
  size,
  weight,
  colorHover,
  bgHover,
  borderHover,
}: Props) => {
  return (
    <ButtonBig
      bg={bg}
      button={button}
      color={color}
      border={border}
      size={size}
      weight={weight}
      colorHover={colorHover}
      bgHover={bgHover}
      borderHover={borderHover}
    >
      TEXT
    </ButtonBig>
  );
};
