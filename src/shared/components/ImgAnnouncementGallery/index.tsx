import {
  Container,
  Img,
  ImgCont,
  SectionTitle,
  ImgBox,
  ImgBoxModal,
  ImgModal,
  ModalContainer,
  ModalTitle,
  Modalheader,
} from "./styles";
import { UpdateAuth } from "../../providers/authProvider";
import { Box, Modal } from "@mui/material";
import { useState } from "react";

export const ImgGalleryAnnouncement = () => {
  const { announcement } = UpdateAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <SectionTitle>Fotos</SectionTitle>
      <ImgCont>
        {announcement.announcementImgs[0].imageGallery.map(
          (element: any, index: number) => {
            return (
              <div key={index}>
                <ImgBox onClick={handleOpen}>
                  <Img image={element} />
                </ImgBox>
                <Modal open={open} onClose={handleClose}>
                  <Box>
                    <ModalContainer>
                      <Modalheader>
                        <ModalTitle>Imagem do veículo</ModalTitle>
                        <ModalTitle
                          onClick={handleClose}
                          style={{ fontSize: "24px", color: "#ADB5BD" }}
                        >
                          X
                        </ModalTitle>
                      </Modalheader>
                      <ImgBoxModal>
                        <ImgModal image={element} />
                      </ImgBoxModal>
                    </ModalContainer>
                  </Box>
                </Modal>
              </div>
            );
          }
        )}
      </ImgCont>
    </Container>
  );
};
