import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilterProfile } from "../../shared/components/VehiclesFilter/indexProfile";

export const ProfileAnnouncements = () => {
  return (
    <ContentDashboard>
      <NavBar />
      <VehiclesFilterProfile />
      <CarouselAuction />
      <Carousel id="car" type={"car"} />
      <Carousel id="motorcycle" type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
