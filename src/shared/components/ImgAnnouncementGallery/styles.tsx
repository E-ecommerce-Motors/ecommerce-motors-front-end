import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  image?: any;
}

export const Container = styled.section`
  width: 440px;
  height: 377px;
  background: ${theme.colors.grey10};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 44px;
  gap: 32px;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    width: 351px;
    height: 359px;
  }
`;

export const Img = styled.div`
  width: 94.22px;
  height: 54.05px;
  background-image: url(${(props: Props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 27px 7px;
  gap: 10px;
  width: 108px;
  height: 108px;
  background: ${theme.colors.grey7};
  border-radius: 4px;
  @media (max-width: 780px) {
    width: 90px;
    height: 90px;
  }
`;
export const ImgCont = styled.div`
  width: 352px;
  height: 248px;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  gap: 10px;
  @media (max-width: 1320px) {
    width: 90%;
    grid-template-columns: repeat(4, 0fr);
  }
  @media (max-width: 780px) {
    width: 281px;
    height: 230px;
    grid-template-columns: repeat(3, 0fr);
  }
`;

export const SectionTitle = styled.h2`
  width: 128px;
  height: 25px;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_6_600};
  font-size: ${theme.size.Heading_6};
  line-height: 25px;
  color: ${theme.colors.grey1};
`;
export const ModalTitle = styled.h2`
  width: max-content;
  height: 20px;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_7_500};
  font-size: ${theme.size.Heading_7};
  line-height: 20px;
  color: ${theme.colors.grey1};
`;

export const ModalContainer = styled.div`
  width: 520px;
  height: 354px;
  background: ${theme.colors.grey10};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Modalheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 302px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 520px;
  height: 56px;
  background: ${theme.colors.grey10};
`;

export const ImgModal = styled.div`
  width: 380px;
  height: 230px;
  background-image: url(${(props: Props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const ImgBoxModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 27px 7px;
  gap: 10px;
  width: 466px;
  height: 239px;
  background: ${theme.colors.grey7};
  border-radius: 4px;
`;
