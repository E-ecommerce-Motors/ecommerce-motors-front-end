import styled, { css } from "styled-components";
import "@fontsource/inter";

export const ButtonBig = styled.button`
  box-sizing: border-box;
  gap: 10px;
  padding: 12px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${(props) => props.border};
  border-radius: 4px;
  width: ${(props) => (props.button == "big" ? "146px" : "119px")};
  height: ${(props) => (props.button == "big" ? "48px" : "38px")};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: "Inter", sans-serif;
  :hover {
    background-color: ${(props) => props.backgroundHover};
    color: ${(props) => props.colorHover};
    border: ${(props) => props.borderHover};
  }
  :disabled {
    background-color: ${(props) => (props.disable ? "#B0A6f0" : "#CED4DA")};
    color: ${(props) => (props.disable ? "#EDEAFD" : "#FFFFFF")};
    border: ${(props) => (props.disable ? "#B0A6f0" : "#CED4DA")};
  }
`;
