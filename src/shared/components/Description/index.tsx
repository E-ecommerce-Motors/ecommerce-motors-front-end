import { UpdateAuth } from "../../providers/authProvider";
import { Container, SectionTitle, TextArea } from "./styles";

interface Props {
  user: string;
}

export const DescriptionAnnouncement = () => {
  const { announcement } = UpdateAuth();

  return (
    <Container>
      <SectionTitle>Descrição</SectionTitle>
      <TextArea>{announcement.description}</TextArea>
    </Container>
  );
};
