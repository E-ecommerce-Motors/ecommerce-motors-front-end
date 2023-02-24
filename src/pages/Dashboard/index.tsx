import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";

export const Dashboard = () => {
  return (
    <>
      <NavBar auth={"authenticated"} user={"Lucas Galvs"} />
      <VehiclesFilter />
      <Footer />
    </>
  );
};
