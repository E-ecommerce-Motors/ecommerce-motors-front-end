import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.875rem;
  padding: 2.75rem ;
  width: 25rem;
  min-height: 25.75rem;
  background-color: ${theme.colors.whiteFixed};
  border-radius: .25rem;

    section {
      padding: .625rem 0rem;
    }
    span {
      font-size: ${theme.size.body_1};
      font-weight: ${theme.weight.body_2_500};
      color: ${theme.colors.grey2};
    }

    label {
      color: ${theme.colors.grey0};
      font-weight: ${theme.weight.body_2_500};
    } 
    h3 {
      padding-bottom: 15px;
    }
    
`

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${theme.colors.whiteFixed};
  color: ${theme.colors.grey0} ;
  font-size: ${theme.size.button_big_text} ;
  font-weight: ${theme.weight.Heading_2_600} ;
  border: .125rem solid ${theme.colors.grey4};
  border-radius: .25rem;
  height: 3rem;
  width: 100%;

    :hover {
      background-color: ${theme.colors.brand1};
      border: .125rem solid${theme.colors.brand1};
      color: ${theme.colors.whiteFixed} ;
    };
`

export const ForgotPassword = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const NotHaveAccount = styled.div`
  display: flex;
  justify-content: center;

    p {
      font-size: ${theme.size.body_1};
      font-weight: ${theme.weight.body_2_400};
      color: ${theme.colors.grey2};
      font-family: ${theme.fonts.inter};
    }
`

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: .9375rem;
`

export const Button = styled.button`
  background-color: ${theme.colors.brand1};
  color: ${theme.colors.whiteFixed} ;
  font-size: ${theme.size.button_big_text} ;
  font-weight: ${theme.weight.Heading_2_600} ;
  border: .125rem solid${theme.colors.brand1};
  border: none;
  border-radius: .25rem;
  height: 3rem;
  width: 100%;
`

export const ErrorMessage = styled.p`
display: flex;
align-self: flex-start;
padding: 5px 3px;
position: absolute;
font-weight: 600;
font-size: .8rem;
color: ${theme.colors.grey3};
`;
