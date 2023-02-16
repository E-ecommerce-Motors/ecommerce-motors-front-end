import styled from "styled-components"

export const ContentTextAreaInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 10px;
width: 15%;
height: 20%;
background-color: var(black);



.textInput{
    
    resize: none;
    width: 100%;
    line-height: 20px;
    border: 2px solid var(--grey8);
    border-radius: 5px;
    transition: .5s;
    padding: 8px;
    font-family: Inter;
    &:hover{
        background-color: var(--grey8);
        transition: .5s;
    }
    :focus{
        border:2px solid var(--brand2);
        outline: 0;
    }
}

    p {
        font-size: .875rem;
        color: var(--whiteFixed);
    }
`