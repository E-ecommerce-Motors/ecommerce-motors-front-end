import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;

  width: max-content;
  gap: 20px;
  z-index: 2;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${theme.colors.grey8};
  width: 100vw;
`;

export const BgBrand = styled.div`
  width: 100vw;
  height: 500px;
  background-color: ${theme.colors.brand2};
  position: absolute;
  top: 80px;
  z-index: 1;
`;
