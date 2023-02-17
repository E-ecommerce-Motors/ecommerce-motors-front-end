import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Card = styled.section`
  width: 735px;
  height: 326px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 663px;
  height: 177px;
`;

export const Content = styled.div`
  z-index: 4;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 24px 36px;
  gap: 69px;
  width: 735px;
  height: 330px;
`;

export const ImgContainer = styled.section`
  z-index: 3;
  position: absolute;
  width: 735px;
  height: 326px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
`;
export const Bg = styled.section`
  z-index: 1;
  position: absolute;
  width: 734px;
  height: 325.89px;
  background: #e9ecef;
`;

export const Img = styled.div`
  z-index: 2;
  position: absolute;
  align-self: center;
  width: 581.96px;
  height: 315.11px;
  order: 0;
  background-image: url(src/assets/land-rover-range-rover-car-png-25.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Heading = styled.h2`
  font-family: ${theme.fonts.lexend};
  font-weight: ${theme.weight.Heading_6_600};
  font-size: ${theme.size.Heading_6};
  font-style: normal;
  line-height: 25px;
  color: ${theme.colors.grey10};
  width: 658px;
  height: 25px;
`;

export const Paragraph = styled.p`
  width: 663px;
  height: 28px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  color: ${theme.colors.grey5};
  font-weight: ${theme.weight.body_1_400};
  font-size: ${theme.size.body_1};
  line-height: 28px;
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
  width: 51px;
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
  color: ${theme.colors.whiteFixed};
  font-size: ${theme.size.Heading_7};
  line-height: 20px;
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  width: 658px;
  height: 32px;
  justify-content: space-between;
  align-items: center;
`;

export const Infos = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 17.5%;
`;

export const Saler = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  width: 109px;
  height: 24px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_500};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.whiteFixed};
  padding-left: 8px;
  flex-grow: 0;
`;

export const Time = styled.p`
  font-family: ${theme.fonts.lexend};
  font-size: ${theme.size.Heading_7};
  font-weight: ${theme.weight.Heading_7_500};
  font-style: normal;
  color: ${theme.colors.grey1};
  width: 65%;
`;

export const Clock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 123px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  position: absolute;
  left: 36px;
  top: 24px;
  background: ${theme.colors.whiteFixed};
  border-radius: 32px;
`;

export const Button = styled.button`
  width: 735px;
  height: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 36px;
  gap: 441px;
  position: relative;
  background: ${theme.colors.brand1};
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.button_big_text};
  font-size: ${theme.size.button_big_text};
  line-height: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-style: none;
  color: ${theme.colors.whiteFixed};
`;

export const Product = styled.section`
  width: 735px;
  height: 388px;
  :hover ${ImgContainer} {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }
  :hover ${Button} {
    background: ${theme.colors.brand2};
  }
`;
