import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Content = styled.form`
  background-color: ${theme.colors.whiteFixed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  border-radius: 4px;
  width: 500px;
  height: 300px;
  padding: 30px;

  .close {
    background-color: transparent;
    border: none;
    font-size: 30px;
  }
`

export const Heading = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`