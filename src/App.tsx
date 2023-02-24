import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailedAnnouncement from "./shared/components/DetailedAnnouncement";
import { RoutesMain } from "./shared/routes";


const App = () => {
  return (
    <>
      <ToastContainer
        position={"top-right"}
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      {/* <RoutesMain></RoutesMain> */}
      {/* <NavBar auth={"authenticated"} user={"Lucas Galvs"} /> */}
      <DetailedAnnouncement nameCar="Prisma" />
    </>
  );
};

export default App;
