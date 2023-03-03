import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { useContext, useEffect } from "react";
import { api } from "../../shared/services/api";
import { UserContext } from "../../shared/providers/UserProvider";

export const Dashboard = () => {
  
  return (
    <ContentDashboard>
      <NavBar />
      <VehiclesFilter />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
