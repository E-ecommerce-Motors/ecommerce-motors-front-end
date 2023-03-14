import { Box, Modal } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { EditAnnouncement } from "../Modal/EditAnnouncement";
import { Link, useParams } from "react-router-dom";
import {
  Heading7,
  Icon,
  Img,
  ImgContainer,
  KM_Year,
  Paragraph,
  Price,
  Container,
  Footer,
  Infos,
  Saler,
  Name,
  Active,
  Edit,
  FooterBtn,
} from "./styles";
import { UserContext } from "../../providers/UserProvider";
import { boolean } from "yup";

interface Props {
  img?: Img[];
  heading: string;
  text: string;
  saler: boolean;
  km: number;
  year: number;
  price: number;
  name: string;
  active?: boolean;
  type: string;
  id: number;
  tA: "sale" | "auction";
  user: any;
}

interface Img {
  coverImage: any;
  imageGallery: Array<string>;
  id: number;
}

export const ProductCardShooping = ({
  img,
  heading,
  text,
  saler,
  km,
  year,
  price,
  name,
  type,
  id,
  tA,
  user,
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const announcementRe = {
    img,
    tA,
    heading,
    text,
    saler,
    km,
    year,
    price,
    name,
    type,
    id,
  };

  return (
    <Container>
      <Link
        to={`/announcement/${announcementRe.id}`}
        style={{ textDecoration: "none" }}
      >
        <ImgContainer>
          <Img image={img ? img[0].coverImage : ""} />
        </ImgContainer>
      </Link>
      <Heading7>
        {heading.length > 31 ? `${heading.slice(0, 31)}...` : heading}
      </Heading7>
      <Paragraph>
        {text.length > 74 ? `${text.slice(0, 71)}...` : text}
      </Paragraph>
      <Saler>
        <Icon>{name.slice(0, 1)}</Icon>
        <Name>{name}</Name>
      </Saler>
      <Footer>
        <Infos>
          <KM_Year>{`${km} KM`}</KM_Year>
          <KM_Year>{year}</KM_Year>
        </Infos>
        <Price>{priceformat}</Price>
      </Footer>
    </Container>
  );
};
