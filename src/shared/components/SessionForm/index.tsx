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
  ContentForm,
  ContentInputs,
  ErrorMessage,
  ForgotPassword,
  LinkStyled,
  NotHaveAccount,
} from "./styles";

export const SessionForm = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(formLoginSchema) });

  return (
    <ContentForm onSubmit={handleSubmit(onSubmitLogin)}>
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
        <span>Esqueci minha senha</span>
      </ForgotPassword>
      <Button type="submit">Entrar</Button>
      <NotHaveAccount>
        <p>Ainda não possui conta?</p>
      </NotHaveAccount>
      <LinkStyled to="/register">Cadastrar</LinkStyled>
    </ContentForm>
  );
};
