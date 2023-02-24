import styled from "styled-components";

export const DetailedAnnouncementContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 80px; */
  background: linear-gradient(to top, var(--grey9) 10%, var(--brand2) 10%);
  .purple{
    background-color: red;
    width: 100vw;
    height: 80px;
    z-index: -1;
  }

  .carStats {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ;
    /* background-color: var(--grey9); */
    width: 95%;
    gap: 15px;
    .radius{
        border-radius: 5px;
    background-color: var(--grey9);
    width: 95%;
    gap: 15px;
    .radius{
        border-radius: 3px;
    }
    .carImage{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: white;
        height: 355px;
        padding: 15px;
        img{
            max-width: 300px;
            max-height: 300px; 
        background-color: var(--brand2);
        width: 100vw;
        img{
            width: 30%;
            height: 30%;
        }
    }

    .carModel{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 100%;
    }

    .carDescription{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 100%;
    }
  }
`;
