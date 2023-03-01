import React, { useContext, useState } from "react";
import { theme } from "../../../styles/theme";
import { useForm } from "react-hook-form";
import { CloseButton, Container, ModalWrapper } from "./style";
import { CreateAnnouncementContext } from "../../providers/AnnouncementContext";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
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
} from "../Modal/editAnnouncement/styles";
import { ButtonBig } from ".././Button/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { Create } from "../../interfaces/announcement";

export const CreateAnnouncementModal = () => {
  const [change, setChange] = useState(true);
  const [coverImage, setCoverImage] = useState<string>();

  const schema = yup.object().shape({
    title: yup.string().required(),
    year: yup.string().required(),
    mileage: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    typeAnnouncement: yup.string().required(),
    typeVehicle: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Create>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: any) => {
    console.log(data);
    data.userId = 1;
    data.typeAnnouncement = tA;
    data.typeVehicle = type;
    data.announcementImgs = {create:{coverImage}};

    CreateAnn(data);
  };

  const {
    toggleModal,
    CreateAnn,
    year,
    setYear,
    mileage,
    setMileage,
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    type,
    setType,
    tA,
    setTA,
    handleAddFieldsClick,
    handleAdditionalFieldChange,
    additionalFields,
    numAdditionalFields,
    img,
    setImg,
  } = useContext(CreateAnnouncementContext);

  return (
    <ModalWrapper>
      <Container>
        <Header>
          <Heading>Criar anúncio</Heading>
          <CloseButton onClick={toggleModal} type="button">
            x
          </CloseButton>
        </Header>
        <Content onSubmit={handleSubmit(submit)}>
          <Type>Tipo de anúncio</Type>
          <FlexBtn>
            {tA == "sale" ? (
              <>
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
                  onClick={() => setTA("sale")}
                  type="button"
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
                  onClick={() => setTA("auction")}
                  type="button"
                >
                  Leilão
                </ButtonBig>
              </>
            ) : (
              <>
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
                  value={"sale"}
                  {...register("typeAnnouncement")}
                  onClick={() => setTA("sale")}
                  type="button"
                >
                  Venda
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
                  value={"auction"}
                  {...register("typeAnnouncement")}
                  onClick={() => setTA("auction")}
                  type="button"
                >
                  Leilão
                </ButtonBig>
              </>
            )}
          </FlexBtn>
          <Type>Informações do veículo</Type>
          <Title>Título</Title>
          <Input
            placeholder={"Digite o Título do anúncio"}
            width={"big"}
            {...register("title")}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Infos>
            <Single>
              <Title>Ano</Title>
              <Input
                placeholder={"Digite o ano do veículo"}
                width={"none"}
                {...register("year")}
                value={year}
                type="number"
                onChange={(e) => {
                  setYear(Number(e.target.value));
                }}
              />
            </Single>
            <Single>
              <Title>Quilometragem</Title>
              <Input
                placeholder={`Digite a quilometragem do veículo`}
                width={"none"}
                {...register("mileage")}
                value={mileage}
                type="number"
                onChange={(e) => {
                  setMileage(Number(e.target.value));
                }}
              />
            </Single>
            <Single>
              <Title>Preço</Title>
              <Input
                placeholder={`Digite o preço`}
                width={"none"}
                {...register("price")}
                value={price}
                type="number"
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
              />
            </Single>
          </Infos>
          <Title>Descrição</Title>
          <TextArea
            placeholder={"Digite a descrição"}
            {...register("description")}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Type>Tipo de veículo</Type>
          {type == "car" ? (
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
                {...register("typeVehicle")}
                value={"car"}
                onClick={() => setType("car")}
                type="button"
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
                {...register("typeVehicle")}
                value={"motorcycle"}
                onClick={() => setType("motorcycle")}
                type="button"
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
                {...register("typeVehicle")}
                value={"car"}
                onClick={() => setType("car")}
                type="button"
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
                {...register("typeVehicle")}
                value={"motorcycle"}
                onClick={() => setType("motorcycle")}
                type="button"
              >
                Moto
              </ButtonBig>
            </FlexBtn>
          )}
          <Single>
            <Title>Link da imagem 1</Title>
            {
              <Input
                width={"big"}
                // {...register("coverImage")}
                value={coverImage}
                onChange={(e) => {
                  setCoverImage(String(e.target.value));
                }}
              />
            }
          </Single>
          {/* {additionalFields.map((element: string, index: number) => (
            <div key={index + 1}>
              <Title>{`URL da imagem ${index + 2}:`}</Title>
              <Input
                width={"big"}
                placeholder={`URL da imagem ${index + 2}`}
                {...register("img")}
                value={img}
                onChange={(e) => handleAdditionalFieldChange(index, e)}
              />
            </div>
          ))}

          {numAdditionalFields < 5 && (
            <button type="button" onClick={handleAddFieldsClick}>
              Adicionar mais campos
            </button>
          )} */}
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
            disable="sim"
            // disabled={change}
            type="submit"
          >
            Criar Anúncio
          </ButtonBig>
        </Content>
      </Container>
    </ModalWrapper>
  );
};
