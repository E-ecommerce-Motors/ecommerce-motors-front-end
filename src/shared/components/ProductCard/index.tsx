import { Box, Modal } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { EditAnnouncement } from "../Modal/editAnnouncement";
import { Link } from "react-router-dom";
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
import { style } from "@mui/system";
import { UserContext } from "../../providers/UserProvider";

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
  user,
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const [owner, setOwner] = useState(false);

  const { getAnn } = updateAuth();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    userData.id == user ? setOwner(true) : setOwner(false);
  }, []);

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

      <Link
        to={`/announcement/${announcement.id}`}
        style={{ textDecoration: "none" }}
      >
        <ImgContainer>
          {owner ? (
            <Active saler={saler} active={active}>
              {active ? `Ativo` : "Inativo"}
            </Active>
          ) : (
            <></>
          )}
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
      {owner ? (
        <FooterBtn>
          <Edit onClick={handleOpen}>Editar</Edit>{" "}
          <Link
            to={`/announcement/${announcement.id}`}
            style={{ textDecoration: "none" }}
          >
            <Edit>Ver como</Edit>
          </Link>
        </FooterBtn>
      ) : (
        <></>
      )}
    </Container>
  );
};
