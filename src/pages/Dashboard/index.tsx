<<<<<<< HEAD
import { ContentDashboard } from "./styles";
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
=======
import { useEffect, useState } from "react";
import { Carousel } from "../../shared/components/carousel";
import { CarouselAuction } from "../../shared/components/carouselAuction";
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/navBar";
import { api } from "../../shared/services/api";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
>>>>>>> a7b5e6550543296f337039ef158a4eed6a7daf02

export const Dashboard = () => {
  return (
    <>
      <NavBar auth={"authenticated"} user={"Lucas Galvs"} />
      <VehiclesFilter auth={"authenticated"} user={"Lucas Galvs"} />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </>
  );
};
