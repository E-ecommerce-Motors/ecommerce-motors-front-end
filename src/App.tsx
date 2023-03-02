import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./shared/routes";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementContext";
import { UserProvider } from "./shared/providers/UserProvider";

const App = () => {
  return (
    <CreateAnnouncementProvider>
      <UserProvider>
        <ToastContainer
          position={"top-right"}
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
        <RoutesMain></RoutesMain>
      </UserProvider>
    </CreateAnnouncementProvider>
  );
};

export default App;
