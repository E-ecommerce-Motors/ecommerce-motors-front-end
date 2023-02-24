import { Carousel } from "../../shared/components/carousel";
import { CarouselAuction } from "../../shared/components/carouselAuction";
import Footer from "../../shared/components/Footer";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { NavBar } from "../../shared/components/NavBar";

export const Dashboard = () => {
  return (
    <>
      <NavBar auth={"default"} user={"Lucas Galvs"} />
      <VehiclesFilter />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </>
  );
};
