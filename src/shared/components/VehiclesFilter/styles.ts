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
display: flex;
justify-content: center;
margin-bottom: 150px;
width: 100%;
height: 200px;
background-color: ${theme.colors.brand1};
`

export const Profile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-top: 50px;
width: 90%;
height: 400px;
border-radius: 4px;
background-color: ${theme.colors.whiteFixed};
padding: 40px 0px 10px 29px;
`

export const User = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 1000px) {
}
`;

export const Icon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 104px;
height: 104px;
font-family: ${theme.fonts.inter};
font-size: ${theme.size.Heading_3};
font-weight: ${theme.weight.body_2_500};
color: ${theme.colors.whiteFixed};
line-height: 0px;
background: ${theme.colors.brand1};
border-radius: 150px;
`;

export const Name = styled.p`
font-family: ${theme.fonts.lexend};
font-weight: ${theme.weight.body_1_600};
font-size: ${theme.size.body_1};
color: ${theme.colors.grey1};
    span {
        color: ${theme.colors.brand1};
        background-color: ${theme.colors.brand4};
        padding: 4px 8px;
        border-radius: 4px;
    }
`;