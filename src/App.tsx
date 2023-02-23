import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardFooter from "./shared/components/DashboardFooter";
import { NavBar } from "./shared/components/NavBar";
import TextFieldInput from "./shared/components/TextFieldInput";


const App = () => {
  return (
    <>
      <DashboardFooter />
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
