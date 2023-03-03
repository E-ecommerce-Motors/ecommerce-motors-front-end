import { ContentDashboard } from "./styles";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { Carousel } from "../../shared/components/Carousel";
import { VehiclesFilter } from "../../shared/components/VehiclesFilter";
import { CarouselAuction } from "../../shared/components/CarouselAuction";

export const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);

  const token = localStorage.getItem("@MotorsShop:token");

  useEffect(() => {
    if (token) {
      api
        .get("user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserData(res.data);
        });
    }
  }, []);

  return (
    <ContentDashboard>
      <NavBar />
      <VehiclesFilter auth={"default"} user={"Lucas Galvs"} />
      <CarouselAuction />
      <Carousel type={"car"} />
      <Carousel type={"motorcycle"} />
      <Footer />
    </ContentDashboard>
  );
};
