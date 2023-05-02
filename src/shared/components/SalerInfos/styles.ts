import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  image?: any;
}

export const Container = styled.section`
  width: 440px;
  height: 426px;
  background: ${theme.colors.grey10};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 44px;
  gap: 32px;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    padding: 40px 28px;
    gap: 28px;
    width: 351px;
    height: 398px;
  }
`;

export const SectionTitle = styled.h2`
  width: max-content;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_6_600};
  font-size: ${theme.size.Heading_6};
  line-height: 25px;
  color: ${theme.colors.grey1};
`;

export const TextArea = styled.p`
  box-sizing: border-box;
  width: max-content;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_400};
  font-size: ${theme.size.body_2};
  line-height: 28px;
  color: ${theme.colors.grey2};
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 104px;
  height: 104px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-size: ${theme.size.Heading_2};
  font-weight: ${theme.weight.Heading_2_600};
  color: ${theme.colors.whiteFixed};
  line-height: 53px;
  background: ${theme.colors.brand2};
  border-radius: 150px;
  flex-grow: 0;
  @media (max-width: 780px) {
    width: 77px;
    height: 77px;
  }
`;
