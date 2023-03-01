import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAnnouncementModal from "./shared/components/CreateAnnouncementModal";
import DetailedAnnouncement from "./shared/components/DetailedAnnouncement";
import DeleteAnnouncementModal from "./shared/components/DeleteAnnouncementModal";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementContext";
import { RoutesMain } from "./shared/routes";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementContext";
import { CreateAnnouncementContext } from "./shared/providers/AnnouncementContext";

const App = () => {
  return (
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
  );
};

export default App;
