import { CreateComment } from "../../shared/components/CommentCreate";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { RegisterForm } from "../../shared/components/RegisterForm";
import { Content, Background, BgBrand } from "./styles";
import { RetireAnnouncement } from "../../shared/components/CommentList";
import { DescriptionAnnouncement } from "../../shared/components/description";
import { InfosAnnouncement } from "../../shared/components/BasicInfosAnnouncement";
import { ImgAnnouncement } from "../../shared/components/ImgAnnouncementPage";
import { updateAuth } from "../../shared/providers/authProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ImgGalleryAnnouncement } from "../../shared/components/ImgAnnouncementGallery";
import { SalerInfo } from "../../shared/components/SalerInfos";

export const AnnouncementPage = () => {
  const { retireAnnouncement } = updateAuth();
  const { id } = useParams();
  useEffect(() => {
    retireAnnouncement(Number(id));
  }, []);

  return (
    <>
      <NavBar auth={"authenticated"} user={"Lucas Galvs"} />
      <Background>
        <BgBrand />
        <Content>
          <ImgAnnouncement />
          <InfosAnnouncement />
          <DescriptionAnnouncement />
          <RetireAnnouncement />
          <CreateComment user={"Lucas Galvs"} />
        </Content>
        <Content>
          <ImgGalleryAnnouncement />
          <SalerInfo />
        </Content>
      </Background>
      <Footer />
    </>
  );
};
