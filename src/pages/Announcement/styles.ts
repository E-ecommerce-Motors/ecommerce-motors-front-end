import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 15px 15px 15px;
  width: max-content;
  gap: 20px;
  z-index: 2;
  @media (max-width: 1320px) {
    align-items: center;
    width: 90%;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${theme.colors.grey8};
  width: 100%;
`;
export const Allcontet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 90px;
  flex-wrap: wrap;
  width: 1320px;
  @media (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
    width: max-content;
  }
`;

export const BgBrand = styled.div`
  width: 100%;
  height: 550px;
  background-color: ${theme.colors.brand2};
  position: absolute;
  top: 80px;
  z-index: 1;
`;
