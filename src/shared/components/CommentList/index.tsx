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
import { useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";

interface Props {
  user: string;
}

export const RetireAnnouncement = () => {
  const { announcement } = updateAuth();

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
      timePass.push(`há ${(time / msInSeconds).toFixed()} segundos`);
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

  return (
    <Container>
      <SectionTitle>Comentários</SectionTitle>
      <Frame>
        {announcement.intermediarys.map((element: any, index: number) => {
          calcTime(element.comment.createdAt);
          return (
            <Content key={index}>
              <User>
                <Icon>{`${element.comment.user.name[0].slice(
                  0,
                  1
                )}${element.comment.user.name[1].slice(0, 1)}`}</Icon>
                <Name>{element.comment.user.name}</Name>
                <Ball />
                <Time>{timePass[index]}</Time>
              </User>
              <TextArea>{element.comment.text}</TextArea>
            </Content>
          );
        })}
      </Frame>
    </Container>
  );
};
