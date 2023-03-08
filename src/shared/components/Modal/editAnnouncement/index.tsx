import { theme } from "../../../../styles/theme";
import { ButtonBig } from "../../Button/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { updateAuth } from "../../../providers/authProvider";
import {
  Btn,
  CloseButton,
  Container,
  Content,
  FlexBtn,
  Header,
  Heading,
  Infos,
  Input,
  Single,
  TextArea,
  Title,
  Type,
} from "./styles";

interface Announcement {
  id: number;
  img?: Img[];
  heading: string;
  text: string;
  saler: boolean;
  km: number;
  year: number;
  price: number;
  name: string;
  active?: boolean;
  type: string;
  tA: string;
}

interface Img {
  coverImage: any;
  imageGallery: Array<string>;
  id: number;
}

interface Props {
  announcement: Announcement;
  close: any;
}

interface Update {
  title?: string;
  year?: string;
  mileage?: number;
  price?: number;
  description?: string;
  typeAnnouncement?: string;
  typeVehicle?: string;
  coverImage: any;
  imageGallery: Array<string>;
}

export const EditAnnouncement = ({ announcement, close }: Props) => {
  const [title, setTitle] = useState(announcement.heading);
  const [year, setYear] = useState(announcement.year);
  const [mileage, setMileage] = useState(announcement.km);
  const [price, setPrice] = useState(announcement.price);
  const [description, setDescription] = useState(announcement.text);
  const [type, setType] = useState(announcement.type);
  const [tA, setTA] = useState(announcement.tA);
  const [change, setChange] = useState(true);
  const [coverImages, setCoverImages] = useState(
    announcement.img ? announcement.img[0].coverImage : " "
  );
  const [images, setImages] = useState<string[]>(
    announcement.img ? announcement.img[0].imageGallery : []
  );

  const schema = yup.object().shape({
    title: yup.string().optional(),
    year: yup.string().optional(),
    mileage: yup.number().notRequired(),
    price: yup.number().optional(),
    description: yup.string().optional(),
    typeAnnouncement: yup.string().optional(),
    typeVehicle: yup.string(),
    imageGallery: yup.array().optional(),
    coverImages: yup.array().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Update>({
    resolver: yupResolver(schema),
  });

  const { UpdateAnn } = updateAuth();

  const submit = (data: Update) => {
    data.typeAnnouncement = tA;
    data.typeVehicle = type;
    const imageValidation: Array<string> = [];
    images?.map((e) => {
      e != "" ? imageValidation.push(e) : "";
    });
    data.coverImage = coverImages;
    data.imageGallery = images;

    const update = {
      mileage: data.mileage,
      year: data.year,
      description: data.description,
      typeVehicle: data.typeVehicle,
      typeAnnouncement: data.typeAnnouncement,
      title: data.title,
      price: data.price,
      announcementImgs: {
        update: {
          where: { id: announcement.img ? announcement.img[0].id : "" },
          data: {
            coverImage: data.coverImage,
            imageGallery: data.imageGallery,
          },
        },
      },
    };

    UpdateAnn(update, announcement.id);
  };

  const handleIncrementClick = (data: string, index: number) => {
    const nextImages = images?.map((c, i) => {
      if (i === index) {
        return (c = data);
      } else {
        return c;
      }
    });
    setImages(nextImages);
  };

  const handleIncrementImages = () => {
    const newInput = images;
    if (newInput) {
      if (newInput?.length <= 5) {
        newInput?.push("");
      }
    }
    setImages(newInput);
  };

  return (
    <Container>
      <Header>
        <Heading>Editar anúncio</Heading>
        <CloseButton type="button">x</CloseButton>
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
              >
                Leilão
              </ButtonBig>
            </>
          )}
        </FlexBtn>
        <Type>Informações do veículo</Type>
        <Title>Título</Title>
        <Input
          placeholder={announcement.heading}
          width={"big"}
          {...register("title")}
          value={title}
          onChange={(e) => {
            setChange(false);
            setTitle(e.target.value);
          }}
        />
        <Infos>
          <Single>
            <Title>Ano</Title>
            <Input
              placeholder={`${announcement.year}`}
              width={"none"}
              {...register("year")}
              value={year}
              type="number"
              onChange={(e) => {
                setChange(false);
                setYear(Number(e.target.value));
              }}
            />
          </Single>
          <Single>
            <Title>Quilometragem</Title>
            <Input
              placeholder={`${announcement.km} km`}
              width={"none"}
              {...register("mileage")}
              value={mileage}
              type="number"
              onChange={(e) => {
                setChange(false);
                setMileage(Number(e.target.value));
              }}
            />
          </Single>
          <Single>
            <Title>{tA == "sale" ? "Preço" : "Lance inicial"}</Title>
            <Input
              price={true}
              placeholder={`R$ ${announcement.price}`}
              width={"none"}
              {...register("price")}
              value={price}
              type="number"
              onChange={(e) => {
                setChange(false);
                setPrice(Number(e.target.value));
              }}
            />
          </Single>
        </Infos>
        <Title>Descrição</Title>
        <TextArea
          placeholder={announcement.text}
          {...register("description")}
          value={description}
          onChange={(e) => {
            setChange(false);
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
          <Input
            width={"big"}
            value={coverImages}
            placeholder={coverImages}
            onChange={(element) => {
              setChange(false);
              setCoverImages(element.target.value);
            }}
          />
        </Single>
        {images?.map((e: any, index: number) => {
          return (
            <Single key={index}>
              <Title>{index + 1}° Imagem da galeria</Title>
              <Input
                width={"big"}
                value={e}
                placeholder={e}
                onChange={(element) => {
                  setChange(false);
                  handleIncrementClick(element.target.value, index);
                }}
              />
            </Single>
          );
        })}

        <Btn onClick={() => handleIncrementImages()}>
          Adicionar campo para imagem da galeria
        </Btn>
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
            bg={theme.colors.brand1}
            button={theme.button.big}
            color={theme.colors.whiteFixed}
            size={theme.size.button_big_text}
            weight={theme.weight.button_big_text}
            border={theme.colors.brand1}
            bgHover={theme.colors.brand2}
            borderHover={theme.colors.brand2}
            colorHover={theme.colors.whiteFixed}
            disabled={change}
            disable="sim"
            type="submit"
            onClick={() =>
              setTimeout(() => {
                close();
              }, 200)
            }
          >
            Salvar alterações
          </ButtonBig>
        </FlexBtn>
      </Content>
    </Container>
  );
};
