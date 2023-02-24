import { theme } from "../../../../styles/theme";
import { ButtonBig } from "../../Button/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  FlexBtn,
  Header,
  Heading,
  Title,
  Type,
  Input,
  Infos,
  Single,
  TextArea,
} from "./styles";
import { api } from "../../../services/api";
import { useState } from "react";

interface Props {
  id: number;
  img?: any;
  heading: string;
  text: string;
  saler: boolean;
  km: number;
  year: number;
  price: number;
  name: string;
  active?: boolean;
  type: string;
}

interface Update {
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeAnnouncement: string;
}

export const EditAnnouncement = (announcement: Props) => {
  const [title, setTitle] = useState(announcement.heading);
  const [year, setYear] = useState(announcement.year);
  const [mileage, setMileage] = useState(announcement.km);
  const [price, setPrice] = useState(announcement.price);
  const [description, setDescription] = useState(announcement.text);
  const [type, setType] = useState(announcement.type);
  const schema = yup.object().shape({
    title: yup.string(),
    year: yup.string(),
    mileage: yup.number(),
    price: yup.number(),
    description: yup.string(),
    typeAnnouncement: yup.string(),
    // type: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Update>({
    resolver: yupResolver(schema),
  });

  const UpdateAnn = async (data: Update) => {
    await api
      .patch(`announcements/${announcement.id}`, data)
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  };

  const submit = ({
    title,
    description,
    mileage,
    price,
    typeAnnouncement,
    year,
  }: // type,
  Update) => {
    let data = {
      title,
      description,
      mileage,
      price,
      typeAnnouncement,
      year,
    };

    UpdateAnn(data);
  };

  return (
    <Container>
      <Header>
        <Heading>Editar anúncio</Heading>
      </Header>
      <Content onSubmit={handleSubmit(submit)}>
        <Type>Tipo de anúncio</Type>
        <FlexBtn>
          <ButtonBig
            bg={theme.colors.brand1}
            button={theme.button.big}
            color={theme.colors.whiteFixed}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.brand1}
            bgHover={theme.colors.brand2}
            borderHover={theme.colors.brand2}
            colorHover={theme.colors.whiteFixed}
            value={"sale"}
            {...register("typeAnnouncement")}
          >
            Venda
          </ButtonBig>
          <ButtonBig
            bg={theme.colors.whiteFixed}
            button={theme.button.big}
            color={theme.colors.grey0}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.grey4}
            bgHover={theme.colors.whiteFixed}
            borderHover={theme.colors.grey4}
            colorHover={theme.colors.grey0}
            value={"auction"}
            {...register("typeAnnouncement")}
          >
            Leilão
          </ButtonBig>
        </FlexBtn>
        <Type>Informações do veículo</Type>
        <Title>Título</Title>
        <Input
          placeholder={announcement.heading}
          width={"big"}
          {...register("title")}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Infos>
          <Single>
            <Title>Ano</Title>
            <Input
              placeholder={`${announcement.year}`}
              width={"none"}
              {...register("year")}
              onChange={(e) => setYear(Number(e.target.value))}
            />
          </Single>
          <Single>
            <Title>Quilometragem</Title>
            <Input
              placeholder={`${announcement.km} km`}
              width={"none"}
              {...register("mileage")}
              onChange={(e) => setMileage(Number(e.target.value))}
            />
          </Single>
          <Single>
            <Title>Preço</Title>
            <Input
              placeholder={`R$ ${announcement.price}`}
              width={"none"}
              {...register("price")}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Single>
        </Infos>
        <Title>Descrição</Title>
        <TextArea placeholder={announcement.text} />
        <Type>Tipo de veículo</Type>
        {announcement.type == "car" ? (
          <FlexBtn>
            <ButtonBig
              bg={theme.colors.brand1}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.brand1}
              bgHover={theme.colors.brand2}
              borderHover={theme.colors.brand2}
              colorHover={theme.colors.whiteFixed}
              //   {...register("type")}
              //   value={"car"}
            >
              Carro
            </ButtonBig>
            <ButtonBig
              bg={theme.colors.whiteFixed}
              button={theme.button.big}
              color={theme.colors.grey0}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.grey4}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.grey4}
              colorHover={theme.colors.grey0}
              //   {...register("type")}
              //   value={"motorcycle"}
            >
              Moto
            </ButtonBig>
          </FlexBtn>
        ) : (
          <FlexBtn>
            <ButtonBig
              bg={theme.colors.whiteFixed}
              button={theme.button.big}
              color={theme.colors.grey0}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.grey4}
              bgHover={theme.colors.whiteFixed}
              borderHover={theme.colors.grey4}
              colorHover={theme.colors.grey0}
              //   {...register("type")}
              //   value={"car"}
            >
              Carro
            </ButtonBig>
            <ButtonBig
              bg={theme.colors.brand1}
              button={theme.button.big}
              color={theme.colors.whiteFixed}
              size={theme.size.button_big_text}
              weight={theme.weight.button_big_text}
              border={theme.colors.brand1}
              bgHover={theme.colors.brand2}
              borderHover={theme.colors.brand2}
              colorHover={theme.colors.whiteFixed}
              //   {...register("type")}
              //   value={"motorcycle"}
            >
              Moto
            </ButtonBig>
          </FlexBtn>
        )}
        <Type>Publicado</Type>
        <FlexBtn>
          <ButtonBig
            bg={theme.colors.brand1}
            button={theme.button.big}
            color={theme.colors.whiteFixed}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.brand1}
            bgHover={theme.colors.brand2}
            borderHover={theme.colors.brand2}
            colorHover={theme.colors.whiteFixed}
          >
            Sim
          </ButtonBig>
          <ButtonBig
            bg={theme.colors.whiteFixed}
            button={theme.button.big}
            color={theme.colors.grey0}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.grey4}
            bgHover={theme.colors.whiteFixed}
            borderHover={theme.colors.grey4}
            colorHover={theme.colors.grey0}
          >
            Não
          </ButtonBig>
        </FlexBtn>
        <Single>
          <Title>Imagem da capa</Title>
          <Input width={"big"} />
        </Single>

        <FlexBtn>
          <ButtonBig
            bg={theme.colors.grey6}
            button={theme.button.big}
            color={theme.colors.grey2}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.grey6}
            bgHover={theme.colors.grey5}
            borderHover={theme.colors.grey5}
            colorHover={theme.colors.grey2}
          >
            Excluir anúncio
          </ButtonBig>
          <ButtonBig
            bg={theme.colors.grey6}
            button={theme.button.big}
            color={theme.colors.grey2}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.grey6}
            bgHover={theme.colors.grey5}
            borderHover={theme.colors.grey5}
            colorHover={theme.colors.grey2}
            // disabled
            // disable="sim"
            type="submit"
          >
            Salvar alterações
          </ButtonBig>
        </FlexBtn>
      </Content>
    </Container>
  );
};
