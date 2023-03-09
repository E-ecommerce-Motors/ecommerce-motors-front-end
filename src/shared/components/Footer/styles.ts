import styled from "styled-components"

export const ContentFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

width: 100%;
height: 15rem;
padding: 1.8rem;

background-color: var(--grey0);

    p {
        font-size: .875rem;
        color: var(--whiteFixed);
    }

    @media(min-width: 768px){
        flex-direction: row;
        height: 5rem;

    }
`