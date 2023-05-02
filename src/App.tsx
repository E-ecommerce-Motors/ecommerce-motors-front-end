import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./shared/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./shared/providers/UserProvider";
import AnnouncementProvider from "./shared/providers/AnnouncementProvider";

const App = () => {
  return (
    <AnnouncementProvider>
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
    </AnnouncementProvider>
  );
};

export default App;
