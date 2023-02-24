import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAnnouncementModal from "./shared/components/CreateAnnouncementModal";
import DetailedAnnouncement from "./shared/components/DetailedAnnouncement";
import { RoutesMain } from "./shared/routes";

const App = () => {
  return (
    <>
    <CreateAnnouncementModal/>
      <ToastContainer
        position={"top-right"}
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    <RoutesMain></RoutesMain>
    </>
  );
};

export default App;
