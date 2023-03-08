import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  authenticaded?: string;
  open?: boolean;
  mobile?: boolean;
}

export const Auction = styled.div`
  width: 100vw;
  height: 458px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding-left: 60px;
  @media (max-width: 1650px) {
    height: max-content;
  }
  @media (max-width: 1000px) {
    padding-left: 30px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0px;
  overflow: hidden;
  gap: 10px;
  @media (max-width: 1650px) {
    margin-bottom: 30px;
  }
`;
export const Frame = styled.div`
  position: relative;
  width: 96vw;
  height: 388px;
  left: 0px;
  top: 100px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1650px) {
    height: max-content;
    width: 96%;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.lexend};
  font-size: ${theme.size.Heading_5};
  font-weight: ${theme.weight.Heading_5_600};
  line-height: 30px;
  color: #000000;
`;
