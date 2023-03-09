import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  saler?: boolean;
  active?: boolean;
  image?: any;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: max-content;
  height: 350px;
  cursor: pointer;
`;
export const ImgContainer = styled.section`
  box-sizing: border-box;
  width: 312px;
  height: 152px;
  background: ${theme.colors.grey7};
  border: 2px solid ${theme.colors.grey7};
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: center;
  :hover {
    border: 2px solid ${theme.colors.brand1};
    overflow: hidden;
  }
`;

export const Img = styled.div`
  width: 262px;
  height: 150.28px;
  background-image: url(${(props: Props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.5s;
  :hover {
    width: 312px;
    height: 178.96px;
    transition: 0.5s;
  }
`;

export const Heading7 = styled.h2`
  font-family: ${theme.fonts.lexend};
  font-weight: ${theme.weight.Heading_7_600};
  font-size: ${theme.size.Heading_7};
  font-style: normal;
  line-height: 20px;
  color: ${theme.colors.grey1};
  width: 312px;
  height: 22px;
`;

export const Paragraph = styled.p`
  width: 312px;
  min-height: 48px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_400};
  font-size: ${theme.size.body_2};
  line-height: 24px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-size: ${theme.size.body_2};
  font-weight: ${theme.weight.body_2_500};
  color: ${theme.colors.whiteFixed};
  line-height: 0px;
  background: ${theme.colors.brand2};
  border-radius: 150px;
  flex-grow: 0;
`;

export const KM_Year = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  width: max-content;
  height: 32px;
  font-size: ${theme.size.body_2};
  font-weight: ${theme.weight.body_2_500};
  font-family: ${theme.fonts.inter};
  color: ${theme.colors.brand1};
  line-height: 24px;
  background: ${theme.colors.brand4};
  border-radius: 4px;
  flex-grow: 0;
`;

export const Price = styled.span`
  width: 105px;
  height: 20px;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_7_500};
  font-size: ${theme.size.Heading_7};
  line-height: 20px;
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Infos = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 39%;
`;

export const Saler = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  width: max-content;
  height: 24px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_500};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey2};
  padding-left: 8px;
  flex-grow: 0;
`;

export const Active = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: max-content;
  height: 24px;
  position: relative;
  color: ${theme.colors.whiteFixed};
  left: 16px;
  top: 11px;
  background: ${(props: Props) =>
    props.active ? theme.colors.brand1 : theme.colors.grey4};
  visibility: ${(props: Props) => (props.saler ? "visible" : "hidden")};
`;

export const Edit = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  margin-top: -2px;
  gap: 10px;
  width: max-content;
  height: 38px;
  border: 1.5px solid ${theme.colors.grey1};
  border-radius: 4px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.button_medium_text};
  font-size: ${theme.size.button_medium_text};
  line-height: 0px;
  color: ${theme.colors.grey1};
`;

export const FooterBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 195px;
`;
