import { Box, Modal } from "@mui/material";
import { refType } from "@mui/utils";
import { useState } from "react";
import { ButtonBig } from "../Button/styles";
import { EditAnnouncement } from "../Modal/editAnnouncement";
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
  img?: any;
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
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const announcement = {
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
    setOpen(false);
  };

  return (
    <Container onClick={() => handleOpen()}>
      <ImgContainer>
        <Active saler={saler} active={active}>
          {active ? `Ativo` : "Inativo"}
        </Active>
        <Img />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <EditAnnouncement {...announcement} />
        </Box>
      </Modal>
    </Container>
  );
};
