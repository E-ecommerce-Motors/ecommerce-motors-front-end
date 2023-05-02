import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import {
  ContentProfile,
  User,
  Icon,
  Name,
  Description,
  Profile,
} from "./styles";
import { useParams } from "react-router-dom";
import { UpdateAuth } from "../../providers/authProvider";

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

export const VehiclesFilterProfile = () => {
  const { userData, getUser } = useContext(UserContext);
  const { announcements } = UpdateAuth();
  const { userId } = useParams();

  const profileFilter: Announcement[] = [];

  announcements.map((element: Announcement) => {
    if (userId) {
      element.userId == Number(userId) ? profileFilter.push(element) : {};
    }
  });

  useEffect(() => {
    getUser();
  }, [userData]);

  const user = profileFilter.length != 0 ? profileFilter[0].user : "";
  const name = user ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1).toUpperCase() : "";
  const icon2 = name[1] ? name[1].slice(0, 1).toUpperCase() : "";

  return (
    <ContentProfile>
      <Profile key={user?.id}>
        <User>
          <Icon>{`${icon1}${icon2}`}</Icon>
          <Name>
            <p>{user?.name}</p>
            <span>
              {user?.typeAccount === "buyer" ? "Comprador" : "Anunciante"}
            </span>
          </Name>
        </User>
        <Description>{user?.description}</Description>
      </Profile>
    </ContentProfile>
  );
};
