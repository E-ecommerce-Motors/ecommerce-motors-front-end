import { ContentDashboard } from "./styles";
<<<<<<< HEAD
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import { Footer } from "../../shared/components/Footer";
=======
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/navBar";
import { Carousel } from "../../shared/components/carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/carouselAuction";
>>>>>>> 66e3a152eebf10cbb5209cfe41fe227653bdad36

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
