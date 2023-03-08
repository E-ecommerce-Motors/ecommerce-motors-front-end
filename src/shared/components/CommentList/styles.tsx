import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  saler?: boolean;
  active?: boolean;
  image?: any;
}

export const Container = styled.section`
  width: 751px;
  border-radius: 4px;
  background: ${theme.colors.grey10};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 44px;
  gap: 24px;
  margin-bottom: 20px;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    padding: 36px 28px;
    width: 351px;
    height: max-content;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
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

export const Name = styled.p`
  width: max-content;
  height: 24px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_500};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey1};
  flex-grow: 0;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  padding: 0px;
  gap: 8px;
`;

export const TextArea = styled.p`
  box-sizing: border-box;
  width: 663px;
  min-height: 72px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_400};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey2};
  @media (max-width: 1320px) {
    width: 483px;
  }
  @media (max-width: 780px) {
    width: 283px;
    max-height: 168px;
  }
`;

export const Time = styled.p`
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_400};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey3};
  width: max-content;
  height: 24px;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;
  width: 663px;
  max-height: 436px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1320px) {
    width: 483px;
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
export const Ball = styled.div`
  width: 4px;
  height: 4px;
  background: ${theme.colors.grey4};
  border-radius: 150px;
`;
