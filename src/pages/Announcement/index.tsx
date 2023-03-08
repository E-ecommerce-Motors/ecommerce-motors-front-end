import { CreateComment } from "../../shared/components/CommentCreate";
import { Footer } from "../../shared/components/Footer";
import { NavBar } from "../../shared/components/NavBar";
import { RegisterForm } from "../../shared/components/RegisterForm";
import { Content, Background, BgBrand, Allcontet } from "./styles";
import { RetireAnnouncement } from "../../shared/components/CommentList";
import { DescriptionAnnouncement } from "../../shared/components/description";
import { InfosAnnouncement } from "../../shared/components/BasicInfosAnnouncement";
import { ImgAnnouncement } from "../../shared/components/ImgAnnouncementPage";
import { updateAuth } from "../../shared/providers/authProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImgGalleryAnnouncement } from "../../shared/components/ImgAnnouncementGallery";
import { SalerInfo } from "../../shared/components/SalerInfos";
import { api } from "../../shared/services/api";

export const AnnouncementPage = () => {
  const { retireAnnouncement } = updateAuth();
  const [render, setRender] = useState<boolean>(false);
  const { id } = useParams();
  useEffect(() => {
    retireAnnouncement(Number(id));
    setTimeout(() => {
      setRender(true);
    }, 100);
  }, [render == false]);

  return render ? (
    <>
      <NavBar />
      <Background>
        <BgBrand />
        <Allcontet>
          <Content>
            <ImgAnnouncement />
            <InfosAnnouncement />
            <DescriptionAnnouncement />
          </Content>
          <Content>
            <ImgGalleryAnnouncement />
            <SalerInfo />
          </Content>
          <Content>
            <RetireAnnouncement />
            <CreateComment />
          </Content>
        </Allcontet>
      </Background>
      <Footer />
    </>
  ) : (
    <></>
  );
};
