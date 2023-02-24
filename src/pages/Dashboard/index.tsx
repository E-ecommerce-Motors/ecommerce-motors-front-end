import { useEffect, useState } from "react";
import { Carousel } from "../../shared/components/carousel";
import { CarouselAuction } from "../../shared/components/carouselAuction";
import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/navBar";
import { api } from "../../shared/services/api";

export const Dashboard = () => {
  return (
    <>
      <NavBar auth={"default"} user={"Lucas Galvs"} />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </>
  );
};
