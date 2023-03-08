import { Container, Auction, Frame, Title } from "./styles";
import { ProductCard } from "../ProductCard";
import { api } from "../../services/api";
import { User } from "../NavBar/styles";
import { ProductCardAuction } from "../ProductCardAuction";

interface Props {
  type: "car" | "motorcycle";
}

interface User {
  name: string;
  saler?: boolean;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeVehicle: "car" | "motorcycle";
}

export const CarouselAuction = () => {
  const saler: boolean = true;
  const name: string = "Antonio";

  const heading: string = "Product title stays here - max 1 linesssss";
  const km: number = 2;
  const year: number = 2019;
  const price: number = 22345.56;
  const text: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetti industry.Lorem...aaaaaaa";

  return (
    <Container id="auction">
      <Auction>
        <Title>Leilão</Title>
        <Frame>
          <ProductCardAuction
            heading={heading}
            km={km}
            year={year}
            price={price}
            name={name}
            text={text}
            saler={saler}
          />
          <ProductCardAuction
            heading={heading}
            km={km}
            year={year}
            price={price}
            name={name}
            text={text}
            saler={saler}
          />
          <ProductCardAuction
            heading={heading}
            km={km}
            year={year}
            price={price}
            name={name}
            text={text}
            saler={saler}
          />
          <ProductCardAuction
            heading={heading}
            km={km}
            year={year}
            price={price}
            name={name}
            text={text}
            saler={saler}
          />
          <ProductCardAuction
            heading={heading}
            km={km}
            year={year}
            price={price}
            name={name}
            text={text}
            saler={saler}
          />
        </Frame>
      </Auction>
    </Container>
  );
};
