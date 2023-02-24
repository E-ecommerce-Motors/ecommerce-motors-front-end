import { useEffect, useState } from "react";
import { Container, Auction, Frame, Title } from "./style";
import { ProductCard } from "../productCard";
import { api } from "../../services/api";
import { User } from "../navBar/styles";

interface Props {
  type: "car" | "motorcycle";
}

interface Announcement {
  name: string;
  saler?: boolean;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeVehicle: "car" | "motorcycle";
}

export const Carousel = ({ type }: Props) => {
  const saler: boolean = true;
  const name: string = "Antonio";

  const [announcements, setAnnouncements] = useState<any>([]);

  const getAnn = async () => {
    await api
      .get("announcements")
      .then((response) =>
        setAnnouncements(JSON.parse(response.request.response))
      )
      .catch((response) => console.log(response));
  };
  useEffect(() => {
    getAnn();
  }, []);

  const typeFilter: Announcement[] = [];

  announcements.map((element: Announcement) => {
    if (element.typeVehicle == type) {
      typeFilter.push(element);
    }
  });

  return (
    <Container>
      <Auction>
        <Title>{type == "car" ? "Carros" : "Motos"}</Title>
        <Frame>
          {typeFilter.map((element: Announcement, index: number) => {
            let date = element.year.split("-");
            return (
              <ProductCard
                km={element.mileage}
                heading={element.title}
                name={name}
                saler={saler}
                price={element.price}
                text={element.description}
                key={index}
                year={Number(date[0])}
              />
            );
          })}
        </Frame>
      </Auction>
    </Container>
  );
};
