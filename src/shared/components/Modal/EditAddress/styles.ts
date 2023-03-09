import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface Props {
  width: string;
  height?: string;
  price?: boolean;
}

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  width: ${(props: Props) => (props.width == "big" ? "466px" : "225px")};
  min-height: 48px;
  max-height: 48px;
  gap: 10px;
  border: 1.5px solid ${theme.colors.grey7};
  border-radius: 4px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.input_placeholder};
  font-size: ${theme.size.input_placeholder};
  line-height: 0px;
  color: ${theme.colors.grey3};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    font-family: ${theme.fonts.inter};
    font-style: normal;
    font-weight: ${theme.weight.input_placeholder};
    font-size: ${theme.size.input_placeholder};
    line-height: 0px;
    color: ${theme.colors.grey3};
  }
  @media (max-width: 666px) {
    width: ${(props: Props) =>
    props.price == true || props.width == "big" ? "314px" : "148px"};
  }
`;

export const Container = styled.section`
  position: absolute;
  height: 100vh;
  left: 50%;
  transform: translate(-50%);
  background: ${theme.colors.whiteFixed};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px 0px;
  gap: 24px;

    @media (min-width: 768px) {
      width: 520px;
      height: 605px;
    }
    @media (min-width: 1280px) {
      top: 10%;
    }
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
