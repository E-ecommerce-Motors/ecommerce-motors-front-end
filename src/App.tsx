import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./shared/components/navBar";

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
      <NavBar auth={"authenticated"} user={"Lucas Galvs"} />
    </>
  );
};

export default App;
