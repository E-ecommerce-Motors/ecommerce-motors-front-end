import { Box, Modal } from "@mui/material";
import { refType } from "@mui/utils";
import { useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { ButtonBig } from "../Button/styles";
import { EditAnnouncement } from "../Modal/EditAnnouncement";
import { ProductCardAuction } from "../ProductCardAuction";
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
} from "./styles";

interface Props {
  img?: Array<Img>;
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
}

interface Img {
  announcementImgs: string;
}

export const ProductCard = ({
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
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const { getAnn } = updateAuth();

  const announcement = {
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

  const active: boolean = true;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    getAnn();
    setOpen(false);
  };

  return (
    <Container>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <EditAnnouncement announcement={announcement} close={handleClose} />
        </Box>
      </Modal>
      <ImgContainer onClick={handleOpen}>
        <Active saler={saler} active={active}>
          {active ? `Ativo` : "Inativo"}
        </Active>
        <Img image={img ? img[0] : ""} />
      </ImgContainer>
      <Heading7>
        {heading.length > 41 ? `${heading.slice(0, 38)}...` : heading}
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
