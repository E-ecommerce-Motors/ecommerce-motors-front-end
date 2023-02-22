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
}: Props) => {
  const priceformat: string = price.toLocaleString(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  });

  const active: boolean = true;
  return (
    <Container>
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
        {text.length > 97 ? `${text.slice(0, 94)}...` : text}
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
