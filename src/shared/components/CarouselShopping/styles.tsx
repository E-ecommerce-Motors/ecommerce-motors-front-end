import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  authenticaded?: string;
  open?: boolean;
  mobile?: boolean;
}

export const Auction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: max-content;
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
  padding: 70px 0px;
  gap: 10px;
  @media (max-width: 1000px) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const Frame = styled.div`
  position: relative;
  width: max-content;
  /* height: 388px; */
  left: 0px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  ::-webkit-scrollbar {
    display: none;
  }
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

export const Message = styled.p`
  font-family: ${theme.fonts.inter};
  font-size: ${theme.size.Heading_6};
  font-weight: ${theme.weight.Heading_6_600};
  font-style: normal;
  line-height: 30px;
  color: ${theme.colors.grey6};
`;
