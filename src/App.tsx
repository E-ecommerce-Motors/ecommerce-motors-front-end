import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextFieldInput from "./shared/components/TextFieldInput";

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
    </>
  );
};

export default App;
