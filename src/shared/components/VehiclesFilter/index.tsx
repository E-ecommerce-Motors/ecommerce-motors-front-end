import { Button } from "@mui/material";
import { useState } from "react";
import { theme } from "../../../styles/theme";
import { ButtonBig } from "../button/styles";
import {
  ContentButtons,
  ContentFilter,
  ContentProfile,
  ContentText,
} from "./styles";
interface Props {
  auth: "default" | "authenticated";
  user: string;
}
export const VehiclesFilter = ({ auth, user }: Props) => {
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
          <h1>teste</h1>
        </ContentProfile>
      )}
    </>
  );
};
