import {
  Container,
  Icon,
  Name,
  User,
  SectionTitle,
  Time,
  Frame,
  Content,
  TextArea,
  Ball,
  Delete,
  Header,
  TextAreaInput,
} from "./styles";
import { UpdateAuth } from "../../providers/authProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Comment {
  text: string;
  userId: number;
}

export const RetireAnnouncement = () => {
  const { announcement, retireAnnouncement, DeleteComment, UpdateComment } =
    UpdateAuth();
  const { id } = useParams();
  const { userData } = useContext(UserContext);
  const [editText, setEditText] = useState("");

  const msInDay = 24 * 60 * 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInMinutes = 60 * 1000;
  const timePass: Array<string> = [];

  const calcTime = (data: number) => {
    const date = new Date(data);
    const now = new Date();
    const time = +now - +date;

    if (time >= 1000 && time < 60000) {
      timePass.push(`há menos de 1 minuto`);
    } else if (time >= 60000 && time < 3600000) {
      timePass.push(`há ${(time / msInMinutes).toFixed()} minutos`);
    } else if (time >= 3600000 && time < 86400000) {
      timePass.push(`há ${(time / msInHour).toFixed()} horas`);
    } else if (time >= 86400000) {
      timePass.push(
        +(time / msInDay).toFixed(1) > 30
          ? `há ${(time / msInDay).toFixed()} mês`
          : `há ${(time / msInDay).toFixed()} dias`
      );
    }
  };

  const schema = yup.object().shape({
    text: yup.string(),
  });

  const {
    register,
    formState: { errors },
  } = useForm<Comment>({
    resolver: yupResolver(schema),
  });

  const deleteComment = (index: number) => {
    const idComment = announcement.intermediarys[index].id;
    DeleteComment(idComment, Number(id));
    reload();
  };
  const submit = (index: number) => {
    const idComment = announcement.intermediarys[index].id;
    const data: any = { text: editText };
    UpdateComment(idComment, Number(id), data);
    reload();
  };

  const reload = () => {
    setTimeout(() => {
      retireAnnouncement(Number(id));
    }, 300);
  };

  const [edit, setEdit] = useState(false);

  return (
    <Container>
      <SectionTitle>Comentários</SectionTitle>
      <Frame>
        {announcement.intermediarys.map((element: any, index: number) => {
          calcTime(element.comment.createdAt);
          const name = element.comment.user.name
            ? element.comment.user.name.split(" ")
            : "";
          const icon1 = name[0] ? name[0].slice(0, 1).toUpperCase() : "";
          const icon2 = name[1] ? name[1].slice(0, 1).toUpperCase() : "";
          return (
            <Content key={index}>
              <Header>
                <User>
                  <Icon>{`${icon1}${icon2}`}</Icon>
                  <Name>{element.comment.user.name}</Name>
                  <Ball />
                  <Time>
                    {timePass[index] ? timePass[index] : "há menos de 1 minuto"}
                  </Time>
                </User>
                {userData.id == element.comment.userId ? (
                  <Delete>
                    <IconButton onClick={() => setEdit(true)}>
                      <EditIcon style={{ width: "14px", height: "14px" }} />
                    </IconButton>
                    <IconButton onClick={() => deleteComment(index)}>
                      <DeleteIcon style={{ width: "14px", height: "14px" }} />
                    </IconButton>
                  </Delete>
                ) : (
                  <></>
                )}
              </Header>
              {edit ? (
                <TextAreaInput
                  placeholder={element.comment.text}
                  value={editText}
                  {...register("text")}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => {
                    setEdit(false);
                    submit(index);
                  }}
                />
              ) : (
                <TextArea>{element.comment.text}</TextArea>
              )}
            </Content>
          );
        })}
      </Frame>
    </Container>
  );
};
