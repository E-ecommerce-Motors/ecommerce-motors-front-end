import { ContentDashboard } from "./styles";
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/navBar";
import { Carousel } from "../../shared/components/carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/carouselAuction";

export const Dashboard = () => {
  return (
    <ContentDashboard>
      <NavBar auth={"authenticated"} user={"Lucas Galvs"} />
      <VehiclesFilter auth={"authenticated"} user={"Lucas Galvs"} />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
