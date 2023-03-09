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
} from "./styles";
import { updateAuth } from "../../providers/authProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const RetireAnnouncement = () => {
  const { announcement, retireAnnouncement } = updateAuth();
  const { id } = useParams();

  const msInDay = 24 * 60 * 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInMinutes = 60 * 1000;
  const msInSeconds = 1000;
  let timePass: Array<string> = [];

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

  const user = announcement.user.name || {};
  const name = user ? user.split(" ") : "";
  const icon1 = name[0] ? name[0].slice(0, 1).toUpperCase() : "";
  const icon2 = name[1] ? name[1].slice(0, 1).toUpperCase() : "";

  return (
    <Container>
      <SectionTitle>Comentários</SectionTitle>
      <Frame>
        {announcement.intermediarys.map((element: any, index: number) => {
          calcTime(element.comment.createdAt);
          return (
            <Content key={index}>
              <User>
                <Icon>{`${icon1}${icon2}`}</Icon>
                <Name>{element.comment.user.name}</Name>
                <Ball />
                <Time>
                  {timePass[index] ? timePass[index] : "há menos de 1 minuto"}
                </Time>
              </User>
              <TextArea>{element.comment.text}</TextArea>
            </Content>
          );
        })}
      </Frame>
    </Container>
  );
};
