import { useEffect, useState } from "react";
import { Carousel } from "../../shared/components/Carousel";
import { CarouselAuction } from "../../shared/components/CarouselAuction";
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { api } from "../../shared/services/api";

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
