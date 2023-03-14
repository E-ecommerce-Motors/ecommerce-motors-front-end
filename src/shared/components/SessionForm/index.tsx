import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Title } from "../Carousel/styles";
import { ILoginData } from "../../interfaces/user";
import { formLoginSchema } from "../../schemas/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, SubTitle } from "../RegisterForm/styles";
import { UserContext } from "../../providers/UserProvider";
import {
  Button,
  ButtonRetrivePassword,
  ContentForm,
  ContentInputs,
  ForgotPassword,
  LinkStyled,
  NotHaveAccount,
} from "./styles";
import { RecoveryPassword } from "../RecoveryPassword";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SessionForm = () => {
  const box = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleOut = () => {
    box.current?.classList.add("animate__animated", "animate__bounceOut");
    setTimeout(() => {
      navigate("/register");
    }, 700);
  };

  const { onSubmitLogin, setRecovery, recovery } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(formLoginSchema) });

  return (
    <div ref={box}>
      {recovery && <RecoveryPassword />}
      <ContentForm onSubmit={handleSubmit(onSubmitLogin)} >
        <Title>Login</Title>
        <ContentInputs>
          <section>
            <SubTitle>Email</SubTitle>
            <Input placeholder="Digitar email" {...register("email")} />
          </section>
          <section>
            <SubTitle>Senha</SubTitle>
            <Input
              type="password"
              placeholder="Digitar senha"
              {...register("password")}
            />
          </section>
        </ContentInputs>
        <ForgotPassword>
          <ButtonRetrivePassword
            type="button"
            onClick={() => setRecovery(true)}
          >
            Esqueci minha senha
          </ButtonRetrivePassword>
        </ForgotPassword>
        <Button type="submit">Entrar</Button>
        <NotHaveAccount>
          <p>Ainda não possui conta?</p>
        </NotHaveAccount>
        <LinkStyled onClick={handleOut}>Cadastrar</LinkStyled>
      </ContentForm>
    </div>
  );
};
