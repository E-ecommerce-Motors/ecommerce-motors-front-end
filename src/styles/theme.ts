import "@fontsource/inter";
import "@fontsource/lexend";

export const theme = {
  colors: {
    brand1: "#4529E6",
    brand2: "#5126EA",
    brand3: "#B0A6f0",
    brand4: "#EDEAFD",
    grey0: "#0B0D0D",
    grey1: "#212529",
    grey2: "#495057",
    grey3: "#868E96",
    grey4: "#ADB5BD",
    grey5: "#CED4DA",
    grey6: "#DEE2E6",
    grey7: "#E9ECEF",
    grey8: "#F1F3F5",
    grey9: "#F8F9FA",
    grey10: "#FDFDFD",
    whiteFixed: "#FFFFFF",
    alert1: "#CD2B31",
    alert2: "#FDD8D8",
    alert3: "#FFE5E5",
    sucess1: "#18794E",
    sucess2: "#CCEBD7",
    sucess3: "#DDF3E4",
    random1: "#E34D8C",
    random2: "#C04277",
    random3: "#7D2A4D",
    random4: "#7000FF",
    random5: "#6200E3",
    random6: "#36007D",
    random7: "#349974",
    random8: "#2A7D5F",
    random9: "#153D2E",
    random10: "#6100FF",
    random11: "#5700E3",
    random12: "#30007D",
  },
  size: {
    Heading_: "44px",
    Heading_2: "36px",
    Heading_3: "32px",
    Heading_4: "28px",
    Heading_5: "24px",
    Heading_6: "20px",
    Heading_7: "16px",
    body_1: "16px",
    body_2: "14px",
    button_big_text: "16px",
    button_medium_text: "14px",
    input_placeholder: "16px",
    input_label: "14px",
  },
  weight: {
    body_1_400: 400,
    body_1_600: 600,
    body_2_400: 400,
    body_2_500: 500,
    button_big_text: 600,
    button_medium_text: 600,
    input_placeholder: 400,
    input_label: 500,
    Heading_1_700: 700,
    Heading_2_600: 600,
    Heading_3_600: 600,
    Heading_3_500: 500,
    Heading_4_600: 600,
    Heading_4_500: 500,
    Heading_5_600: 600,
    Heading_5_500: 500,
    Heading_6_600: 600,
    Heading_6_500: 600,
    Heading_7_600: 600,
    Heading_7_500: 500,
  },
  button: {
    big: "big",
    medium: "medium",
  },
  disable: {
    brand: true,
    commun: false,
  },
  fonts: {
    inter: '"Inter","sans-serif"',
    lexend: '"Lexend", sans-serif',
  },
};

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  button?: keyof typeof theme.button;
  disable?: keyof typeof theme.disable;
  size?: keyof typeof theme.size;
  weight?: keyof typeof theme.weight;
  bg?: keyof typeof theme.colors;
  border?: keyof typeof theme.colors;
  colorHover?: keyof typeof theme.colors;
  bgHover?: keyof typeof theme.colors;
  borderHover?: keyof typeof theme.colors;
};
