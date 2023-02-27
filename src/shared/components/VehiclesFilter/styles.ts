import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ContentFilter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 46px;
width: 100vw;
height: 550px;
background-color: ${theme.colors.brand2};

    @media(min-width: 768px){
        height: 400px;
    }
`

export const ContentText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;

    h2 {
        color: ${theme.colors.brand4};
        font-weight: ${theme.weight.Heading_1_700};
        font-size: ${theme.size.Heading_3};
        text-align: center;
        @media(min-width: 768px){
        font-size: ${theme.size.Heading_};
        }
    }
    span {
        color: ${theme.colors.grey9};
        font-weight: ${theme.weight.body_1_400};
        font-size: ${theme.size.body_2};
        text-align: center;
    }
`

export const ContentButtons = styled.div`
display: flex;
flex-direction: column;
gap: 21px;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`

export const ContentProfile = styled.div`
 width: 90%;
 height: 500px;
 background-color: #ffff;
`