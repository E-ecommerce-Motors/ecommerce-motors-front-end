import { Container, Img } from "./styles";
import { useEffect, useState } from "react";
import { updateAuth } from "../../providers/authProvider";
import { useParams } from "react-router-dom";

export const ImgAnnouncement = () => {
  const { announcement } = updateAuth();

  return (
    <Container>
      <Img image={announcement.announcementImgs[0].coverImage} />
    </Container>
  );
};
