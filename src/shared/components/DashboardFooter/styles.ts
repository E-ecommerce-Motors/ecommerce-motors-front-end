import styled from "styled-components"

export const ContentFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

min-width: 100vw;
height: 310px;
background-color: var(--grey0);

    p {
        font-size: .875rem;
        color: var(--whiteFixed);
    }
`