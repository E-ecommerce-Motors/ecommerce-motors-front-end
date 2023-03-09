import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { Carousel } from "../../shared/components/Carousel";

export const PersonalAnnouncements = () => {
  return (
    <ContentDashboard>
      <NavBar />
      <VehiclesFilter />
      <CarouselAuction />
      <Carousel id="car" type={"car"} />
      <Carousel id="motorcycle" type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
