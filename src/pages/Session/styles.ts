import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContentSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.grey8};
  width: 100%;
  height: calc(100vh - 160px);
`