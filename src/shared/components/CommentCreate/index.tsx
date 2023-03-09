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
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

interface Comment {
  text: string;
  userId: number;
}

export const CreateComment = () => {
  const [comment, setComment] = useState<string>("");
  const token = localStorage.getItem("@MotorsShop:token");
  const placeholder =
    "Carro muito confortável, foi uma ótima experiência de compra...";

  const { CreateComment, retireAnnouncement } = updateAuth();
  const { userData } = useContext(UserContext);
  const { id } = useParams();

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
    data.userId = userData.id;
    data.text = comment;
    CreateComment(data, Number(id));
    reload();
  };

  const reload = () => {
    retireAnnouncement(Number(id));
  };

  const user = userData || {};
  const name = user.name ? user.name.split(" ") : [];
  const icon1 = name[0] ? name[0].slice(0, 1).toUpperCase() : "";
  const icon2 = name[1] ? name[1].slice(0, 1).toUpperCase() : "";

  return (
    <Container>
      <Content onSubmit={handleSubmit(submit)}>
        {token ? (
          <User>
            <Icon>{`${icon1}${icon2}`}</Icon>
            <Name>{userData.name}</Name>
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
            // style={{ position: "absolute", marginTop: "100px" }}
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
