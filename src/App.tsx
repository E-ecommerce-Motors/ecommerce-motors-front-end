import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementContext";
import { RoutesMain } from "./shared/routes";

const App = () => {
  return (
    <>
      <CreateAnnouncementProvider>
        <ToastContainer
          position={"top-right"}
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
        <RoutesMain></RoutesMain>
      </CreateAnnouncementProvider>
    </>
  );
};

export default App;
