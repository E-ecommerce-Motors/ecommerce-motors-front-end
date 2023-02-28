import { useEffect, useState } from "react";
import { Container, Auction, Frame, Title } from "./styles";
import { ProductCard } from "../productCard";
import { api } from "../../services/api";
import { updateAuth } from "../../providers/authProvider";

interface Props {
  type: "car" | "motorcycle";
}

interface Announcement {
  id: number;
  name: string;
  saler?: boolean;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeVehicle: "car" | "motorcycle";
  typeAnnouncement: "sale" | "auction";
}

export const Carousel = ({ type }: Props) => {
  const saler: boolean = true;
  const name: string = "Antonio";

  const { getAnn, announcements } = updateAuth();

  useEffect(() => {
    getAnn;
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
                id={element.id}
                km={element.mileage}
                heading={element.title}
                name={name}
                saler={saler}
                price={element.price}
                text={element.description}
                key={index}
                year={Number(date[0])}
                type={element.typeVehicle}
                tA={element.typeAnnouncement}
              />
            );
          })}
        </Frame>
      </Auction>
    </Container>
  );
};
