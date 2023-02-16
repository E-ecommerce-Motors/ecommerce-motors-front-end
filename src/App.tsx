import { ToastContainer } from "react-toastify";
import DashboardFooter from "./shared/components/DashboardFooter";
import TextAreaInput from "./shared/components/TextAreaInput";

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
    </>
  );
};

export default App;
