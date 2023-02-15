import styled from "styled-components"

export const ContentFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

min-width: 100vw;
height: 20rem;
padding: 1.8rem;

background-color: var(--grey0);

    p {
        font-size: .875rem;
        color: var(--whiteFixed);
    }

    @media(min-width: 1024px){
        flex-direction: row;
        height: 8rem;

    }
`