import {
  Heading,
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
  Card,
  Content,
  Bg,
  Button,
  Product,
  Time,
  Clock,
} from "./styles";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EastIcon from "@mui/icons-material/East";
import { theme } from "../../../styles/theme";

interface Props {
  img?: any;
  heading: string;
  text: string;
  saler?: boolean;
  km: number;
  year: string;
  price: number;
  name: string;
  active?: boolean;
}

export const ProductCardAuction = ({
  img,
  heading,
  text,
  km,
  year,
  price,
  name,
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Product>
      <Card>
        <Content>
          <Clock>
            <ScheduleIcon sx={{ color: theme.colors.brand1 }} />
            <Time>01:58:00</Time>
          </Clock>
          <Container>
            <Heading>
              {heading.length > 41 ? `${heading.slice(0, 38)}...` : heading}
            </Heading>
            <Paragraph>
              {text.length > 86 ? `${text.slice(0, 84)}...` : text}
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
        </Content>
        <ImgContainer />
        <Img image={img.coverImage} />
        <Bg />
      </Card>
      <Button>
        Acessar página do leilão <EastIcon />
      </Button>
    </Product>
  );
};
