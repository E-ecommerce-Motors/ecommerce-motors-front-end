import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";

export const Dashboard = () => {
  return (
    <ContentDashboard>
      <NavBar auth={"default"} user={"Gabriel Fray"} />
      <VehiclesFilter />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
