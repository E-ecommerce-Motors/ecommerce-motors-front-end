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

  gap: 1.25rem;
  padding: 2rem ;
  width: 25rem;
  min-height: 101rem;
  background-color: ${theme.colors.whiteFixed};
  border-radius: .25rem;
  animation: fadeIn 1s;

    @media(min-width: 425px){
      padding: 2.5rem;
    }

  .selected-button {
    background-color: ${theme.colors.brand1};
    color: ${theme.colors.whiteFixed};
    border: .125rem solid ${theme.colors.brand1};
  }
  
  h3 {
      padding-bottom: .9375rem;
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
    gap: 1.5625rem;
  }
`
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1rem;
  width: 100%;
  min-height: 3rem;
  max-height: 3rem;
  gap: .625rem;
  border: .0938rem solid ${theme.colors.grey7};
  border-radius: .25rem;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  line-height: 0rem;
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
    line-height: 0rem;
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
  min-height: 5rem;
  max-height: 9.375rem;
  min-width: 16rem;
  max-width: 16rem;
  padding: .5rem 1rem .5rem 1rem;
  box-sizing: border-box;
  border: .0938rem solid ${theme.colors.grey7};
  border-radius: .25rem;
  gap: .625rem;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  color: ${theme.colors.grey3};
  ::placeholder {
    gap: .625rem;
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    color: ${theme.colors.grey3};
  } 
     @media(min-width: 375px){
      min-width: 19rem;
      max-width: 19rem;
    }

    @media(min-width: 425px){
      min-width: 20rem;
      max-width: 20rem;
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
  border: .125rem solid ${(props: Props) => props.border};
  border-radius: .25rem;
  height: 3rem;
  width: 100%;

    :hover {
      background-color: ${(props: Props) => props.bgHover};
      color: ${(props: Props) => props.colorHover};
      border: .125rem solid ${(props: Props) => props.borderHover};
    };

    :disabled {
      background-color: ${(props: Props) =>
    props.disable ? "#B0A6f0" : "#CED4DA"};
      color: ${(props: Props) => (props.disable ? "#EDEAFD" : "#FFFFFF")};
      border: ${(props: Props) => (props.disable ? "#B0A6f0" : "#CED4DA")};
    }

    
    
`