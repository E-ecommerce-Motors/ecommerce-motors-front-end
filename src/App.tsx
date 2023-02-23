import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextFieldInput from "./shared/components/TextFieldInput";
import { NavBar } from "./shared/components/navBar";
import DetailedAnnouncement from "./shared/components/DetailedAnnouncement";

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
      {/* <NavBar auth={"authenticated"} user={"Lucas Galvs"} /> */}
      <DetailedAnnouncement nameCar="Prisma" />
    </>
  );
};

export default App;
