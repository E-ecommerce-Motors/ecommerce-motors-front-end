import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  weight: number;
  size: string;
  border: string;
  button: string;
  bg: string;
  bgHover: string;
  colorHover: string;
  borderHover: string;
  color: string;
  disable?: string;
}

export const ButtonBig = styled.button`
  box-sizing: border-box;
  gap: 10px;
  padding: 12px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${(props: Props) => props.border};
  border-radius: 4px;
  width: ${(props: Props) => (props.button == "big" ? "228px" : "119px")};
  height: ${(props: Props) => (props.button == "big" ? "48px" : "38px")};
  background-color: ${(props: Props) => props.bg};
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => props.size};
  font-weight: ${(props: Props) => props.weight};
  font-family: ${theme.fonts.inter};
  :hover {
    background-color: ${(props: Props) => props.bgHover};
    color: ${(props: Props) => props.colorHover};
    border: 1.5px solid ${(props: Props) => props.borderHover};
  }
  :disabled {
    background-color: ${(props: Props) =>
      props.disable ? "#B0A6f0" : "#CED4DA"};
    color: ${(props: Props) => (props.disable ? "#EDEAFD" : "#FFFFFF")};
    border: ${(props: Props) => (props.disable ? "#B0A6f0" : "#CED4DA")};
  }
`;
