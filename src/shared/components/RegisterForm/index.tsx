import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { theme } from "../../../styles/theme";
import { IRegisterData } from "../../interfaces/user";
import { UserContext } from "../../providers/UserProvider";
import { formRegisterSchema } from "../../schemas/user";
import { Title } from "../Carousel/styles";
import {
  Button,
  ContentAdress,
  ContentButton,
  ContentForm,
  Div,
  Input,
  SubTitle,
  TextArea,
} from "./styles";

export const RegisterForm = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const [button1Active, setButton1Active] = useState(false);
  const [button2Active, setButton2Active] = useState(false);

  function handleButtonClick(button: any) {
    if (button === "button1") {
      setButton1Active(true);
      setButton2Active(false);
    } else if (button === "button2") {
      setButton2Active(true);
      setButton1Active(false);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IRegisterData>({ resolver: yupResolver(formRegisterSchema) });

  return (
    <ContentForm onSubmit={handleSubmit(onSubmitRegister)}>
      <div>
        <Title>Cadastro</Title>
        <h4>Informações pessoais</h4>
        <section>
          <SubTitle>Nome</SubTitle>
          <Input placeholder="Ex: Samuel Leão" {...register("name")} />
        </section>
        <section>
          <SubTitle>Email</SubTitle>
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
        </section>
        <section>
          <SubTitle>CPF</SubTitle>
          <Input placeholder="000.000.000-00" {...register("cpf")} />
        </section>
        <section>
          <SubTitle>Celular</SubTitle>
          <Input placeholder="(DDD) 90000-0000" {...register("phone")} />
        </section>
        <section>
          <SubTitle>Data de nascimento</SubTitle>
          <Input placeholder="00/00/00" {...register("birthDate")} />
        </section>
        <section>
          <SubTitle>Descrição</SubTitle>
          <TextArea
            placeholder="Digitar descrição"
            {...register("description")}
          />
        </section>
      </div>
      <h4>Informações de endereço</h4>
      <section>
        <SubTitle>CEP</SubTitle>
        <Input placeholder="00000.000" />
      </section>
      <ContentAdress>
        <Div>
          <section>
            <SubTitle>Estado</SubTitle>
            <Input placeholder="Digitar estado" />
          </section>
        </Div>
        <Div>
          <section>
            <SubTitle>Cidade</SubTitle>
            <Input placeholder="Digitar cidade" />
          </section>
        </Div>
      </ContentAdress>
      <section>
        <SubTitle>Rua</SubTitle>
        <Input placeholder="Digitar rua" />
      </section>
      <ContentAdress>
        <section>
          <SubTitle>Número</SubTitle>
          <Input placeholder="Digitar número" />
        </section>
        <section>
          <SubTitle>Complemento</SubTitle>
          <Input placeholder="Ex: apart 307" />
        </section>
      </ContentAdress>
      <section>
        <SubTitle>Tipo de conta</SubTitle>
        <ContentButton>
          <Button
            bg={theme.colors.whiteFixed}
            color={theme.colors.grey0}
            bgHover={theme.colors.brand1}
            colorHover={theme.colors.whiteFixed}
            border={theme.colors.grey4}
            borderHover={theme.colors.brand1}
            bgFocus={theme.colors.brand1}
            colorFocus={theme.colors.whiteFixed}
            borderFocus={theme.colors.brand1}
            type="button"
            className={button1Active === true ? "selected-button" : ""}
            onClick={() => {
              setValue("typeAccount", "buyer");
              setValue("isSaler", false);
              handleButtonClick("button1");
            }}
          >
            Comprador
          </Button>
          <Button
            bg={theme.colors.whiteFixed}
            color={theme.colors.grey0}
            bgHover={theme.colors.brand1}
            colorHover={theme.colors.whiteFixed}
            border={theme.colors.grey4}
            borderHover={theme.colors.brand1}
            bgFocus={theme.colors.brand1}
            colorFocus={theme.colors.whiteFixed}
            borderFocus={theme.colors.brand1}
            type="button"
            className={`${button2Active === true ? "selected-button" : ""}`}
            onClick={() => {
              setValue("typeAccount", "advertiser");
              setValue("isSaler", true);
              handleButtonClick("button2");
            }}
          >
            Anunciante
          </Button>
        </ContentButton>
      </section>
      <section>
        <SubTitle>Senha</SubTitle>
        <Input
          placeholder="Digitar senha"
          type="password"
          {...register("password")}
        />
      </section>
      <section>
        <SubTitle>Confirmar Senha</SubTitle>
        <Input
          placeholder="Confirmar senha"
          type="password"
          {...register("confirmPassword")}
        />
      </section>

      <div>
        <Button
          bg={theme.colors.brand1}
          color={theme.colors.whiteFixed}
          bgHover={theme.colors.brand1}
          colorHover={theme.colors.whiteFixed}
          border={theme.colors.brand1}
          borderHover={theme.colors.brand1}
          type="submit"
        >
          Finalizar Cadastro
        </Button>
      </div>
    </ContentForm>
  );
};
