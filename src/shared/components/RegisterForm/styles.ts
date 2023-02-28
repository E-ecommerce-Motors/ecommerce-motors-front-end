import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface Props {
  width: string;
  height?: string;
}

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 44px 48px;
  width: 25rem;
  min-height: 101rem;
  background-color: ${theme.colors.whiteFixed};
  border-radius: .25rem;

    h4 {
        font-family: ${theme.fonts.inter};
        font-weight: ${theme.weight.body_1_600};
        font-size: ${theme.size.body_2};
        color: ${theme.colors.grey1};
        font-style: medium;
    }
`
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: ${(props: Props) => (props.width == "big" ? "315px" : "145px")};
  min-height: 48px;
  max-height: 48px;
  gap: 10px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  line-height: 0px;
  color: ${theme.colors.grey3};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    line-height: 0px;
    color: ${theme.colors.grey3};
  }
`;

export const SubTitle = styled.h3`
  font-family: ${theme.fonts.inter};
  font-weight: ${theme.weight.Heading_4_600};
  font-size: ${theme.size.body_2};
  color: ${theme.colors.grey1};
`

export const ContentAdress = styled.div`
display: flex;
`