import { useContext } from "react";
import { theme } from "../../../styles/theme";
import { useForm } from "react-hook-form";
import { UserContext, UserProvider } from "../../providers/UserProvider";
import {
  CloseButton,
  Container,
  ModalWrapper,
} from "../CreateAnnouncementModal/style";
import * as yup from "yup";
import {
  Content,
  FlexBtn,
  Header,
  Heading,
  Title,
  Type,
  Input,
  Infos,
  Single,
  TextArea,
} from "../Modal/editAnnouncement/styles";
import { ButtonBig } from ".././Button/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Create } from "../../interfaces/announcement";

export const CreateAnnouncementModal = () => {
    const schema = yup.object().shape({
      name: yup.string().optional(),
      email: yup.string().optional(),
      cpf: yup.string().optional(),
      phone: yup.string().optional(),
      birthdDate: yup.string().optional(),
      description: yup.string().optional(),
    });

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Create>({
    resolver: yupResolver(schema),
  });

  
  const UpdateUserModal = () => {
    const { onSubmitUpdate } = useContext(UserContext);

    const submit = async (data: any) => {
      console.log(data);
      data.userId = 1;
  
      onSubmitUpdate(data);
    };

  <ModalWrapper>
      <Container>
        <Header>
          <Heading>Criar anúncio</Heading>
          <CloseButton  type="button">
            x
          </CloseButton>
        </Header>
        <Content onSubmit={handleSubmit(submit)}>
          <Type>Tipo de anúncio</Type>
          
            
        </Content>
      </Container>
    </ModalWrapper>
};}
