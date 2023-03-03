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
`;

// ///////////////////////////////////////////////////////////////////

export const KM_Year = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  width: 57px;
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
  width: 19%;
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
`;
