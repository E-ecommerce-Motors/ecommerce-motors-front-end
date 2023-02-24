import { Carousel } from "../../shared/components/Carousel";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import Footer from "../../shared/components/Footer";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { NavBar } from "../../shared/components/NavBar";
import { ContentDashboard } from "./styles";

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
