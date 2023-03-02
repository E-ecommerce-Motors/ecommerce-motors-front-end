import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { SessionForm } from "../../shared/components/SessionForm";
import { ContentSession } from "./styles";

export const Session = () => {
  return (
    <>
      <NavBar auth="default" user={""} />
      <ContentSession>
        <SessionForm />
      </ContentSession>
      <Footer />
    </>
  );
};
