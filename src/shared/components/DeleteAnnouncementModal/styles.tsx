import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.section`
  position: absolute;
  width: 520px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.whiteFixed};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 466px;
`;

export const Para = styled.p`
  box-sizing: border-box;
  width: 466px;
  height: 72px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_400};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey2};
`;

export const SectionTitle = styled.h2`
  width: 128px;
  height: 25px;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_7_500};
  font-size: ${theme.size.Heading_7};
  line-height: 25px;
  color: ${theme.colors.grey1};
`;

export const Button = styled.div`
  transition: 0.2s;
  cursor: pointer;
  box-sizing: border-box;
  gap: 10px;
  padding: 12px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${theme.colors.grey6};
  border-radius: 4px;
  width: 228px;
  height: 48px;
  background-color: ${theme.colors.grey6};
  color: ${theme.colors.grey2};
  font-size: ${theme.size.button_big_text};
  font-weight: ${theme.weight.button_big_text};
  font-family: ${theme.fonts.inter};

  :hover {
    background-color: ${theme.colors.grey5};
    color: ${theme.colors.grey2};
    border: 1.5px solid ${theme.colors.grey5};
  }
`;
