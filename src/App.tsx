import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
