import { Title } from "../Carousel/styles";
import { TextArea } from "../Modal/editAnnouncement/styles";
import { ContentAdress, ContentForm, Input, SubTitle } from "./styles";

export const RegisterForm = () => {
  return (
    <ContentForm>
      <Title>Cadastro</Title>
      <h4>Informações pessoais</h4>
      <SubTitle>Nome</SubTitle>
      <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
      <SubTitle>Email</SubTitle>
      <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
      <SubTitle>CPF</SubTitle>
      <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
      <SubTitle>Celular</SubTitle>
      <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
      <SubTitle>Data de nascimento</SubTitle>
      <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
      <SubTitle>Descrição</SubTitle>
      {/* <TextArea /> */}
      <div>
        <h4>Informações de endereço</h4>
        <SubTitle>CEP</SubTitle>
        <Input placeholder="Ex: Samuel Leão" width={"big"} />
        <ContentAdress>
          <div>
            <SubTitle>Estado</SubTitle>
            <Input placeholder="Digitar estado" width={"none"} />{" "}
          </div>
          <div>
            <SubTitle>Cidade</SubTitle>
            <Input placeholder="Digitar cidade" width={"none"} />{" "}
          </div>
        </ContentAdress>
        <SubTitle>Rua</SubTitle>
        <Input placeholder="Ex: Samuel Leão" width={"big"} />{" "}
        <ContentAdress>
          <div>
            <SubTitle>Número</SubTitle>
            <Input placeholder="Ex: Samuel Leão" width={"none"} />{" "}
          </div>
          <div>
            <SubTitle>Complemento</SubTitle>
            <Input placeholder="Ex: Samuel Leão" width={"none"} />{" "}
          </div>
        </ContentAdress>
      </div>
    </ContentForm>
  );
};

//  <Input
//    width={"big"}
//    value={e}
//    placeholder={e}
//    onChange={(element) => {
//      setChange(false);
//      handleIncrementClick(element.target.value, index);
//    }}
//  />;, Input
