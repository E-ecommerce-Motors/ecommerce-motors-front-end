import { ToastContainer } from "react-toastify";
import DashboardFooter from "./shared/components/DashboardFooter";

const App = () => {
  return (
    <>
      <DashboardFooter></DashboardFooter>
      <ToastContainer
        position={"top-right"}
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
};

export default App;
