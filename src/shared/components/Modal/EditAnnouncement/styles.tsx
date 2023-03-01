import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface Props {
  width: string;
  height?: string;
}

export const Container = styled.section`
  position: absolute;
  width: 520px;
  height: 100vh;
  left: 40%;

  background: ${theme.colors.whiteFixed};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 302px;
  width: 520px;
  height: 56px;
`;

export const Heading = styled.h2`
  width: 116px;
  height: 20px;
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.Heading_7_500};
  font-size: ${theme.size.Heading_7};
  line-height: 20px;
  color: ${theme.colors.grey1};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Content = styled.form`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 466px;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 25px;
`;

export const Type = styled.h3`
  font-family: ${theme.fonts.lexend};
  font-style: normal;
  font-weight: ${theme.weight.body_2_500};
  font-size: ${theme.size.body_2};
  line-height: 24px;
  color: ${theme.colors.grey0};
`;

export const Title = styled.label`
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_label};
  font-size: ${theme.size.input_label};
  line-height: 17px;
  color: ${theme.colors.grey1};
`;

export const FlexBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 9px;
  width: 466px;
`;

export const Btn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  width: 315px;
  min-height: 38px;
  max-height: 38px;
  border: 1.5px solid ${theme.colors.brand4};
  border-radius: 4px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.button_medium_text};
  font-size: ${theme.size.button_medium_text};
  line-height: 0px;
  color: ${theme.colors.brand1};
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: ${(props: Props) => (props.width == "big" ? "466px" : "148px")};
  min-height: 48px;
  max-height: 48px;
  gap: 10px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  line-height: 0px;
  color: ${theme.colors.grey3};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    line-height: 0px;
    color: ${theme.colors.grey3};
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 436px;
  min-height: 80px;
  max-height: 80px;
  padding: 8px 16px 8px 16px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  gap: 10px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  color: ${theme.colors.grey3};
  resize: none;
  width: 100%;
  ::placeholder {
    gap: 10px;
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    color: ${theme.colors.grey3};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  width: 466px;
  justify-content: space-between;
`;

export const Single = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;
