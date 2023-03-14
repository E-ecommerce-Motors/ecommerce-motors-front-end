import {
  Container,
  Content,
  Heading7,
  Footer,
  Infos,
  KM_Year,
  Price,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";
import { ButtonBig } from "../Button/styles";
import { theme } from "../../../styles/theme";
import { UserContext } from "../../providers/UserProvider";

export const InfosAnnouncement = () => {
  const { announcement, setShopping, shopping } = updateAuth();
  const { userData } = useContext(UserContext);
  const token = localStorage.getItem("@MotorsShop:token");

  const priceformat: string = announcement.price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const handleShopping = () => {
    const data = {
      id: userData.id,
      shopping: announcement,
    };
    setShopping([...shopping, data]);
  };

  return (
    <Container>
      <Content>
        <Heading7>{announcement.title}</Heading7>
        <Footer>
          <Infos>
            <KM_Year>{announcement.year}</KM_Year>
            <KM_Year>{announcement.mileage} KM</KM_Year>
          </Infos>
          <Price>{priceformat}</Price>
        </Footer>
      </Content>
      <ButtonBig
        bg={theme.colors.brand1}
        button={theme.button.big}
        color={theme.colors.whiteFixed}
        size={theme.size.button_big_text}
        weight={theme.weight.button_big_text}
        border={theme.colors.brand1}
        bgHover={theme.colors.brand2}
        borderHover={theme.colors.brand2}
        colorHover={theme.colors.whiteFixed}
        style={{ width: "100px" }}
        onClick={handleShopping}
        disabled={token ? false : true}
      >
        Comprar
      </ButtonBig>
    </Container>
  );
};
