import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { RegisterForm } from "../../shared/components/RegisterForm";
import { ContentRegister } from "./styles";

export const Register = () => {
  return (
    <>
      <NavBar auth={"default"} user={"Lucas Galvs"} />
      <ContentRegister>
        <RegisterForm />
      </ContentRegister>
      <Footer />
    </>
  );
};
