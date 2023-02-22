import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextFieldInput from "./shared/components/TextFieldInput";
import { NavBar } from "./shared/components/navBar";


const App = () => {
  return (
    <>
      <TextFieldInput
        placeholderText="textarea"
        labelText="textarea"
        maxRowsNumber={4}
        inputHeight={130}
        multilineOption={true}
      />
      <TextFieldInput
        placeholderText="textarea"
        labelText="textarea"
        maxRowsNumber={4}
        inputHeight={130}
        multilineOption={true}
      />

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
