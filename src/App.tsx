import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./shared/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserContext, UserProvider } from "./shared/providers/UserProvider";
import CreateAnnouncementProvider from "./shared/providers/AnnouncementProvider";
import { EditUserModal } from "./shared/components/EditUserModal";
import { DeleteUserModal } from "./shared/components/DeleteUserModal";
import { OptionsProfile } from "./shared/components/NavBar/styles";
import { GenericModal } from "./shared/components/GenericModal/GenericModal";
import { useContext } from "react";

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
