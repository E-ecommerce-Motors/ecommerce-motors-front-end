import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  saler?: boolean;
  active?: boolean;
  image?: any;
}

export const Container = styled.section`
  width: 751px;
  height: 239.39px;
  border-radius: 4px;
  background: ${theme.colors.grey10};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 28px 44px;
  gap: 8px;
  margin-bottom: 20px;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    padding: 28px;
    width: 351px;
    height: 326.91px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0px;
  gap: 41px;
  width: 658px;
  height: 137.39px;
  @media (max-width: 1320px) {
    width: 620px;
  }
  @media (max-width: 780px) {
    gap: 71px;
    width: 295px;
    height: 224.91px;
  }
`;

// ///////////////////////////////////////////////////////////////////

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
  width: 645px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1320px) {
    width: 80%;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 113px;
    height: 89.91px;
  }
`;

export const Infos = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 19%;
  @media (max-width: 1320px) {
    width: 23%;
  }
  @media (max-width: 780px) {
    width: 113px;
    height: 32px;
  }
`;

// /////////////////////////////////////////////////////////////////////

export const Heading7 = styled.h2`
  font-family: ${theme.fonts.lexend};
  font-weight: ${theme.weight.Heading_6_600};
  font-size: ${theme.size.Heading_6};
  font-style: normal;
  line-height: 25px;
  color: ${theme.colors.grey1};
  width: 658px;
  height: 32.39px;
  @media (max-width: 1320px) {
    width: 80%;
  }
  @media (max-width: 780px) {
    width: 303px;
    height: 32px;
  }
`;
