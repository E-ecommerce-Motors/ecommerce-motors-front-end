import { TextField } from "@mui/material";
import styled from "styled-components";

export const ContentTextAreaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 15%;

  background-color: var(black);

  /* .TextField {
    resize: none;
    width: 100%;
    line-height: 20px;
    border: 21px solid var(--grey8);
    border-radius: 5px;
    transition: 0.5s;
    padding: 8px;
    font-family: Inter;
    min-height: 90px;
    max-height: 90px;
    &:hover {
      background-color: var(--grey8);
      transition: 0.5s;
      outline: red;
    }
    :focus {
      border: 2px solid var(--brand2);
      outline: 0;
    }
  } */

  p {
    font-size: 0.875rem;
    color: var(--whiteFixed);
  }
`;

export const CustomTextField = styled(TextField)`
  resize: none;
  width: 100%;
  line-height: 20px;
  border: 21px solid var(--grey8);
  border-radius: 5px;
  transition: 0.5s;
  padding: 8px;
  font-family: Inter;
  min-height: 90px;

  :hover {
    background-color: var(--grey8);
    transition: 0.5s;
    outline: red;
  }
  :focus {
    border: 2px solid var(--brand2);
    outline-color: var(--brand2);
  }
  .MuiInputBase-root {
    display: flex;
    align-items: flex-start;
    &.Mui-focused fieldset {
      border-color: var(--brand2);
    }
  }
  p {
    font-size: 0.875rem;
    color: var(--whiteFixed);
  }
`;
