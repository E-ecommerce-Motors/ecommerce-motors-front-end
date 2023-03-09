import { Container, Auction, Frame, Title, Message } from "./styles";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";
import { ProductCardShooping } from "../ProductCard/indexShopping";

interface Props {
  type: "car" | "motorcycle";
  id: "car" | "motorcycle";
}
interface Shopping {
  shopping: Announcement;
  id: number;
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
  userId?: number;
}

interface ImgCover {
  coverImage: any;
  imageGallery: Array<string>;
  id: number;
}

export const CarouselShopping = ({ type, id }: Props) => {
  const { getAnn, shopping } = updateAuth();
  const { userId } = useParams();
  console.log(shopping);

  const typeFilter: Announcement[] = [];

  shopping.map((element: Shopping) => {
    if (element.shopping.typeVehicle == type) {
      typeFilter.push(element.shopping);
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
                <ProductCardShooping
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
