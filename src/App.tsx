import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard";
import { ContentDashboard } from "./pages/Dashboard/styles";
import CreateAnnouncementModal from "./shared/components/CreateAnnouncementModal";
import { EditAnnouncement } from "./shared/components/Modal/editAnnouncement";

import { RoutesMain } from "./shared/routes";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementContext";
import { CreateAnnouncementContext } from "./shared/providers/AnnouncementContext";

const App = () => {
  const {
    toggleModal,
  } = useContext(CreateAnnouncementContext);
  return (
    <CreateAnnouncementProvider>
      <button className="normalButton" onClick={toggleModal}>
        Open Modal
      </button>
      
      <CreateAnnouncementModal />

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
