import {
  Container,
  Icon,
  Name,
  User,
  Options,
  Text,
  PreMade,
  Content,
  TextArea,
} from "./styles";
import { ButtonBig } from "../Button/styles";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";

interface Props {
  user: string;
}

interface Comment {
  text: string;
  userId: number;
}

export const CreateComment = ({ user }: Props) => {
  const [comment, setComment] = useState<string>("");
  const token = localStorage.getItem("@MotorsShop:token");
  const placeholder =
    "Carro muito confortável, foi uma ótima experiência de compra...";

  const { CreateComment } = updateAuth();
  const { id } = useParams();
  const name = user.split(" ");

  const schema = yup.object().shape({
    text: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>({
    resolver: yupResolver(schema),
  });

  const submit = (data: Comment) => {
    data.userId = 1;
    data.text = comment;
    CreateComment(data, Number(id));
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(submit)}>
        {token ? (
          <User>
            <Icon>{`${name[0].slice(0, 1)}${name[1].slice(0, 1)}`}</Icon>
            <Name>{user}</Name>
          </User>
        ) : (
          <></>
        )}
        <TextArea>
          <Text
            value={comment}
            placeholder={placeholder}
            onFocus={() => (comment == "" ? setComment(" ") : "")}
            {...register("text")}
            onBlur={() => (comment == " " ? setComment("") : "")}
            onChange={(e) => setComment(e.target.value)}
          />
          <ButtonBig
            bg={theme.colors.brand1}
            button={theme.button.medium}
            color={theme.colors.whiteFixed}
            size={theme.size.button_medium_text}
            weight={theme.weight.button_medium_text}
            border={theme.colors.brand1}
            bgHover={theme.colors.brand2}
            borderHover={theme.colors.brand2}
            colorHover={theme.colors.whiteFixed}
            style={{ position: "absolute" }}
            type="submit"
            disabled={token ? false : true}
          >
            Comentar
          </ButtonBig>
        </TextArea>
        <Options>
          <PreMade onClick={() => setComment("Gostei Muito")}>
            Gostei Muito
          </PreMade>
          <PreMade onClick={() => setComment("Incrível")}>Incrível</PreMade>
          <PreMade onClick={() => setComment("Recomendarei para meus amigos!")}>
            Recomendarei para meus amigos!
          </PreMade>
        </Options>
      </Content>
    </Container>
  );
};
