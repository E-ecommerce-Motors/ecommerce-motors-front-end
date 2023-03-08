import { useEffect, useState } from "react";
import { Container, Auction, Frame, Title, Message } from "./styles";
import { ProductCard } from "../ProductCard";
import { updateAuth } from "../../providers/authProvider";

interface Props {
  type: "car" | "motorcycle";
  id: "car" | "motorcycle";
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
  announcementImgs: ImgCover[];
  user: any;
}

interface ImgCover {
  coverImage: any;
  imageGallery: Array<string>;
  id: number;
}

export const Carousel = ({ type, id }: Props) => {
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
    <Container
      id={id}
      style={
        type == "motorcycle"
          ? { marginBottom: "60px" }
          : { marginBottom: "0px" }
      }
    >
      <Auction>
        <Title>{type == "car" ? "Carros" : "Motos"}</Title>
        <Frame
          style={
            typeFilter.length == 0
              ? { height: "max-content" }
              : { height: "400px" }
          }
        >
          {typeFilter.length == 0 ? (
            <Message>
              Não há itens a serem mostrados nessa sessão no momento...
            </Message>
          ) : (
            typeFilter.map((element: Announcement, index: number) => {
              let date = element.year.split("-");

              return (
                <ProductCard
                  id={element.id}
                  km={element.mileage}
                  heading={element.title}
                  name={element.user.name}
                  saler={element.user.isSaler}
                  user={element.user.id}
                  price={element.price}
                  text={element.description}
                  key={index}
                  year={Number(date[0])}
                  type={element.typeVehicle}
                  tA={element.typeAnnouncement}
                  img={element.announcementImgs}
                />
              );
            })
          )}
        </Frame>
      </Auction>
    </Container>
  );
};
