import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  saler?: boolean;
  active?: boolean;
  image?: any;
}

export const Container = styled.section`
  width: 751px;
  height: 289px;
  border-radius: 4px;
  background: ${theme.colors.grey10};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    width: 351px;
    height: 414px;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 780px) {
    align-items: flex-start;
    padding: 36px 26px;
    gap: 24px;
    width: 351px;
    height: 414px;
  }
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
  width: 86px;
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
  width: 126px;
  padding: 0px;
  gap: 8px;
`;

export const TextArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 672px;
  height: 128px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  gap: 10px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 5px 5px 0px;
  @media (max-width: 1320px) {
    width: 483px;
  }
  @media (max-width: 780px) {
    width: 284px;
    height: 228px;
    align-items: flex-start;
    border: none;
    justify-content: flex-start;
  }
`;

export const Text = styled.textarea`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 665px;
  height: 126px;
  border: none;
  border-radius: 4px;
  gap: 10px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  color: ${theme.colors.grey3};
  padding: 20px;
  outline: none;
  line-break: auto;
  resize: none;
  background-color: ${theme.colors.grey10};
  ::placeholder {
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    color: ${theme.colors.grey3};
    position: absolute;
    left: 20px;
    top: 20px;

    @media (max-width: 1320px) {
      font-weight: ${theme.weight.input_label};
      font-size: ${theme.size.input_label};
    }
  }
  @media (max-width: 1320px) {
    width: 473px;
  }
  @media (max-width: 780px) {
    width: 284px;
    height: 128px;
    margin-bottom: 10px;
    border: 1.5px solid ${theme.colors.grey7};
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
`;

export const PreMade = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  gap: 10px;
  background: ${theme.colors.grey7};
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 24px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_2_500};
  font-size: 12px;
  line-height: 24px;
  color: ${theme.colors.grey3};
  cursor: pointer;
`;
