import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  image?: any;
}

export const Container = styled.section`
  width: 752px;
  height: 355px;
  background: ${theme.colors.grey10};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1320px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    width: 351px;
    height: 355px;
  }
`;

export const Img = styled.div`
  width: 441px;
  height: 252.96px;
  background-image: url(${(props: Props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 780px) {
    width: 293.97px;
    height: 252.96px;
  }
`;
