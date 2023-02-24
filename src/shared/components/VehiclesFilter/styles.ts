import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ContentFilter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 46px;
width: 100vw;
height: 400px;
background-color: ${theme.colors.brand2};
`

export const ContentText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 748px;
gap: 25px;

    h2 {
        color: ${theme.colors.brand4};
        font-weight: ${theme.weight.Heading_1_700};
        font-size: ${theme.size.Heading_};
        text-align: center;
    }
    span {
        color: ${theme.colors.grey9};
        font-weight: ${theme.weight.body_1_400};
        font-size: ${theme.size.Heading_7};
    }
`

export const ContentButtons = styled.div`
display: flex;
gap: 15px;
`