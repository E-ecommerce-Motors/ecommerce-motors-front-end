import { Container, Img } from "./styles";
import { UpdateAuth } from "../../providers/authProvider";

export const ImgAnnouncement = () => {
  const { announcement } = UpdateAuth();

  return (
    <Container>
      <Img image={announcement.announcementImgs[0].coverImage} />
    </Container>
  );
};
