import styled from "styled-components"

export const ContentFooter = styled.footer`
position: fixed;
left: 0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

min-width: 100vw;
height: 15rem;
padding: 1.8rem;

background-color: var(--grey0);

    p {
        font-size: .875rem;
        color: var(--whiteFixed);
    }

    @media(min-width: 1024px){
        flex-direction: row;
        height: 5rem;

    }
`