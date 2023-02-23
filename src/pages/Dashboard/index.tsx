import Footer from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";

export const Dashboard = () => {
  return (
    <>
      <NavBar auth={"default"} user={"Lucas Galvs"} />
      <Footer />
    </>
  );
};
