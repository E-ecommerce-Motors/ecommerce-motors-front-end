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

export const DescriptionAnnouncement = () => {
  const { announcement } = updateAuth();

  return (
    <Container>
      <SectionTitle>Descrição</SectionTitle>
      <TextArea>{announcement.description}</TextArea>
    </Container>
  );
};
