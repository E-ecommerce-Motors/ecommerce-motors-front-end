import { ContentDashboard } from "./styles";
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { Footer } from "../../shared/components/Footer";
import { useContext, useEffect } from "react";
import { api } from "../../shared/services/api";
import { UserContext } from "../../shared/providers/UserProvider";

export const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);

  const token = localStorage.getItem("@MotorsShop:token");

  useEffect(() => {
    if (token) {
      api
        .get("user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserData(res.data);
        });
    }
    
  }, []);

  return (
    <ContentDashboard>
      <NavBar auth={"default"} user={"Gucas A"} />
      <VehiclesFilter auth={"default"} user={"Lucas Galvs"} />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
