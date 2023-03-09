import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { Carousel } from "../../shared/components/Carousel";
import { CarouselShopping } from "../../shared/components/CarouselShopping";

export const PersonalShopping = () => {
  return (
    <ContentDashboard>
      <NavBar />
      <VehiclesFilter />
      <CarouselShopping id="car" type={"car"} />
      <CarouselShopping id="motorcycle" type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
