import { Container, Auction, Frame, Title } from "./styles";
import { ProductCardAuction } from "../ProductCardAuction";
import { UpdateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";

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

export const CarouselAuction = () => {
  const { userId } = useParams();

  const { getAnn, announcements } = UpdateAuth();

  const auctionFilter: Announcement[] = [];

  announcements.map((element: Announcement) => {
    const profileFilter: Announcement[] = [];
    if (userId) {
      element.userId == Number(userId) ? profileFilter.push(element) : {};
    } else if (element.typeAnnouncement == "auction") {
      auctionFilter.push(element);
    }
    profileFilter.map((element: Announcement) => {
      if (element.typeAnnouncement == "auction") {
        auctionFilter.push(element);
      }
    });
  });

  return userId && auctionFilter.length == 0 ? (
    <></>
  ) : (
    <Container id="auction">
      <Auction>
        <Title>Leilão</Title>
        <Frame>
          {auctionFilter.map((element: Announcement, index: number) => {
            return (
              <ProductCardAuction
                img={element.announcementImgs[0]}
                key={index}
                heading={element.title}
                km={element.mileage}
                year={element.year}
                price={element.price}
                name={element.user.name}
                text={element.description}
                saler={element.saler}
              />
            );
          })}
        </Frame>
      </Auction>
    </Container>
  );
};
