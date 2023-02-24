import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface Props {
  width: string;
  height?: string;
}

export const Container = styled.section`
  position: absolute;
  width: 520px;
  height: 1252px;
  left: 40%;
  /* top: 80px; */
  background: ${theme.colors.whiteFixed};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 1042px;
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
  color: ${theme.colors.grey0};
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

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: ${(props: Props) => (props.width == "big" ? "466px" : "148px")};
  height: 48px;
  gap: 10px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
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
  height: 80px;
  padding: 8px 16px 8px 16px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
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
