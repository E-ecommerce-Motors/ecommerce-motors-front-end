import { theme } from "../../../styles/theme";
import { Title } from "../Carousel/styles";
import IconButton from "@mui/material/IconButton";
import {
  ContentAdress,
  ContentButton,
  ContentForm,
  Div,
  Input,
  SubTitle,
  TextArea,
} from "./styles";

export const RegisterForm = () => {
  return (
    <ContentForm>
      <div>
        <Title>Cadastro</Title>
        <h4>Informações pessoais</h4>
        <SubTitle>Nome</SubTitle>
        <Input placeholder="Ex: Samuel Leão" />
        <SubTitle>Email</SubTitle>
        <Input placeholder="Ex: samuel@kenzie.com.br" />
        <SubTitle>CPF</SubTitle>
        <Input placeholder="000.000.000-00" />
        <SubTitle>Celular</SubTitle>
        <Input placeholder="(DDD) 90000-0000" />
        <SubTitle>Data de nascimento</SubTitle>
        <Input placeholder="00/00/00" />
        <SubTitle>Descrição</SubTitle>
        <TextArea placeholder="Digitar descrição" />
      </div>
      <div>
        <h4>Informações de endereço</h4>
        <SubTitle>CEP</SubTitle>
        <Input placeholder="00000.000" />
        <ContentAdress>
          <Div>
            <SubTitle>Estado</SubTitle>
            <Input placeholder="Digitar estado" />
          </Div>
          <Div>
            <SubTitle>Cidade</SubTitle>
            <Input placeholder="Digitar cidade" />
          </Div>
        </ContentAdress>
        <SubTitle>Rua</SubTitle>
        <Input placeholder="Digitar rua" />
        <ContentAdress>
          <div>
            <SubTitle>Número</SubTitle>
            <Input placeholder="Digitar número" />
          </div>
          <div>
            <SubTitle>Complemento</SubTitle>
            <Input placeholder="Ex: apart 307" />
          </div>
        </ContentAdress>
        <SubTitle>Tipo de conta</SubTitle>
        <ContentButton>
          <IconButton
            sx={{
              borderRadius: 1,
              height: 48,
              width: 152,
              border: `2px solid${theme.colors.grey4}`,
              fontSize: `${theme.size.button_big_text}`,
              fontWeight: `${theme.weight.Heading_2_600}`,
              color: `${theme.colors.grey0}`,

              "&:hover": {
                backgroundColor: `${theme.colors.brand1}`,
                border: `2px solid${theme.colors.brand1}`,
                color: `${theme.colors.whiteFixed}`,
              },
            }}
          >
            Comprador
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 1,
              height: 48,
              width: 152,
              border: `2px solid${theme.colors.grey4}`,
              fontSize: `${theme.size.button_big_text}`,
              fontWeight: `${theme.weight.Heading_2_600}`,
              color: `${theme.colors.grey0}`,

              "&:hover": {
                backgroundColor: `${theme.colors.brand1}`,
                border: `2px solid${theme.colors.brand1}`,
                color: `${theme.colors.whiteFixed}`,
              },
            }}
          >
            Anunciante
          </IconButton>
        </ContentButton>
        <SubTitle>Senha</SubTitle>
        <Input placeholder="Digitar senha" />
        <SubTitle>Confirmar Senha</SubTitle>
        <Input placeholder="Confirmar senha" />
        <IconButton
          sx={{
            borderRadius: 1,
            height: 48,
            backgroundColor: `${theme.colors.brand1}`,
            color: `${theme.colors.whiteFixed}`,
            fontSize: `${theme.size.button_big_text}`,
            "&:hover": {
              backgroundColor: `${theme.colors.brand1}`,
            },
          }}
        >
          Finalizar Cadastro
        </IconButton>
      </div>
    </ContentForm>
  );
};
