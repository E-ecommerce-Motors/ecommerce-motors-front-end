import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface Props {
  bg: string;
  color: string;
  border: string;
  bgHover?: string;
  colorHover?: string;
  borderHover?: string;
  bgFocus?: string;
  colorFocus?: string;
  borderFocus?: string;
  disable?: string;
}

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 44px ;
  width: 25rem;
  min-height: 101rem;
  background-color: ${theme.colors.whiteFixed};
  border-radius: .25rem;

  .selected-button {
    background-color: ${theme.colors.brand1};
    color: ${theme.colors.whiteFixed};
    border: 2px solid ${theme.colors.brand1};
  }
  
  h3 {
      padding-bottom: 15px;
    }

  h4 {
    font-family: ${theme.fonts.inter};
    font-weight: ${theme.weight.body_1_600};
    font-size: ${theme.size.body_2};
    color: ${theme.colors.grey1};
    font-style: medium;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 25px;
  }
`
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
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

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 80px;
  max-height: 150px;
  max-width: 315px;
  min-width: 315px;
  padding: 8px 16px 8px 16px;
  box-sizing: border-box;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  gap: 10px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  color: ${theme.colors.grey3};
  ::placeholder {
    gap: 10px;
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    color: ${theme.colors.grey3};
  }
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;
`

export const ButtonTypeAccount = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.colors.grey0};
  font-size: ${theme.size.button_big_text};
  font-weight: ${theme.weight.Heading_2_600};

  
`
export const Button = styled.button`
  background-color: ${(props: Props) => props.bg};
  color: ${(props: Props) => props.color};
  font-size: ${theme.size.button_big_text} ;
  font-weight: ${theme.weight.Heading_2_600} ;
  border: 2px solid ${(props: Props) => props.border};
  border-radius: 4px;
  height: 48px;
  width: 100%;

    :hover {
      background-color: ${(props: Props) => props.bgHover};
      color: ${(props: Props) => props.colorHover};
      border: 2px solid ${(props: Props) => props.borderHover};
    };

    :disabled {
      background-color: ${(props: Props) =>
    props.disable ? "#B0A6f0" : "#CED4DA"};
      color: ${(props: Props) => (props.disable ? "#EDEAFD" : "#FFFFFF")};
      border: ${(props: Props) => (props.disable ? "#B0A6f0" : "#CED4DA")};
    }

    
    
`