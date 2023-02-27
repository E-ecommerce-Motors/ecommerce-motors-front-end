import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  authenticaded?: string;
  open?: boolean;
  mobile?: boolean;
}

export const Auction = styled.div`
  width: max-content;
  height: 458px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding-left: 60px;
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
  gap: 10px;
`;
export const Frame = styled.div`
  position: relative;
  width: max-content;
  height: 388px;
  left: 0px;
  top: 100px;
  overflow-x: scroll;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  @media (max-width: 1000px) {
    gap: 12px;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.lexend};
  font-size: ${theme.size.Heading_5};
  font-weight: ${theme.weight.Heading_5_600};
  line-height: 30px;
  color: #000000;
`;
