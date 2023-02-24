import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  authenticaded?: string;
  open?: boolean;
  mobile?: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  position: fixed;
  width: 100vw;
  height: 80px;
  background: ${theme.colors.grey10};
  border-bottom: 2px solid ${theme.colors.grey6};
  z-index: 99;
  @media (max-width: 1000px) {
    flex-direction: ${(props: Props) => (props.mobile ? "column" : "row")};
    height: ${(props: Props) => (props.mobile ? "100vh" : "80px")};
    justify-content: ${(props: Props) => (props.mobile ? "flex-start" : "")};
    padding: 0px 30px;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  border-bottom: 0px solid ${theme.colors.grey6};
  @media (max-width: 1000px) {
    border-bottom: ${(props: Props) =>
      props.mobile ? "2px solid #DEE2E6" : "0px"};
    padding: ${(props: Props) => (props.mobile ? "0px 30px" : "0px")};
  }
`;

export const Text = styled.div`
  width: 153.02px;
  height: 26.34px;
  background-image: url(../../../../public/assets/motors-shop-dark.png);
`;

export const Option = styled.a`
  width: 52px;
  height: 28px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${(props: Props) =>
    props.authenticaded == "default"
      ? theme.weight.body_1_600
      : theme.weight.body_1_400};
  font-size: ${theme.size.body_1};
  line-height: 28px;
  color: ${theme.colors.grey2};
  flex: none;
  order: 0;
  flex-grow: 0;
  :hover {
    color: ${theme.colors.grey0};
    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 79px;
  background-color: ${theme.colors.grey6};
  flex: none;
  @media (max-width: 1000px) {
    width: 100vw;
    margin-left: -30px;
    height: 2px;
  }
`;

export const SignUp = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  width: 133px;
  height: 48px;
  background: ${theme.colors.grey10};
  border: 1.5px solid ${theme.colors.grey10};
  border-radius: 4px;
  flex: none;
  order: 5;
  flex-grow: 0;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_1_600};
  font-size: ${theme.size.body_1};
  line-height: 0px;
  color: ${theme.colors.grey2};
  :hover {
    border: 1.5px solid ${theme.colors.grey4};
    color: ${theme.colors.grey0};
  }
  @media (max-width: 1000px) {
    width: 80vw;
    border: 1.5px solid ${theme.colors.grey4};
  }
`;

export const SignIn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 133px;
  height: 48px;
  background: ${theme.colors.grey10};
  border: 1.5px solid ${theme.colors.grey10};
  border-radius: 4px;
  flex: none;
  order: 4;
  flex-grow: 0;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_1_600};
  font-size: ${theme.size.body_1};
  line-height: 0px;
  color: ${theme.colors.grey2};
  :hover {
    border: 1.5px solid ${theme.colors.grey4};
    color: ${theme.colors.grey0};
  }

  @media (max-width: 1000px) {
    margin-left: -20px;
  }
`;

export const Urls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: Props) =>
    props.authenticaded == "default" ? "flex-end" : "center"};
  align-items: center;
  padding: 0px;
  gap: 44px;
  width: 592px;
  height: 79px;
  flex: none;
  order: 1;
  flex-grow: 0;

  @media (max-width: 1000px) {
    display: ${(props: Props) => (props.mobile ? "flex" : "none")};
    flex-direction: ${(props: Props) => (props.mobile ? "column" : "row")};
    width: 100%;
    height: unset;
    padding: 30px 0px;
    gap: 35px;
    align-items: flex-start;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-size: ${theme.size.body_2};
  font-weight: ${theme.weight.body_2_500};
  color: ${theme.colors.whiteFixed};
  line-height: 0px;
  background: ${theme.colors.brand2};
  border-radius: 150px;
  flex-grow: 0;
`;

export const Name = styled.p`
  width: 101px;
  height: 28px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_1_400};
  font-size: ${theme.size.body_1};
  line-height: 28px;
  color: ${theme.colors.grey2};
  padding-left: 8px;
  flex-grow: 0;
`;

export const MenuBox = styled.div`
  display: ${(props: Props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  height: 202px;
  position: absolute;
  top: 70px;
  background: ${theme.colors.grey9};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  @media (max-width: 1000px) {
    position: relative;
    top: 15px;
    width: 88vw;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

export const OptionsProfile = styled.a`
  width: max-content;
  height: 28px;
  font-family: ${theme.fonts.inter};
  font-style: normal;
  font-weight: ${theme.weight.body_1_400};
  font-size: ${theme.size.body_1};
  line-height: 28px;
  color: ${theme.colors.grey2};
  flex: none;
  order: 0;
  flex-grow: 0;
  :hover {
    color: ${theme.colors.grey0};
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  /* :hover ${MenuBox} {
    display: flex;
  } */
`;

export const Mobile = styled.div`
  display: none;
  input {
    position: absolute;
    opacity: 0;
  }
  label {
    display: none;
    position: absolute;
    width: 35px;
    height: 40px;
    z-index: 1;
    margin-top: -18px;
    margin-left: -2px;
    cursor: pointer;
  }
  span {
    display: none;
    position: absolute;
    background-color: ${theme.colors.grey1};
    width: 30px;
    height: 7px;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform: scale(0.7);
  }
  span::after,
  span::before {
    content: "";
    position: absolute;
    background-color: ${theme.colors.grey1};
    width: 30px;
    height: 7px;
    top: -14px;
    border-radius: 10px;
    transition: all 0.3s linear;
  }
  span::before {
    top: 14px;
  }
  input:checked ~ span {
    background-color: transparent;
  }
  input:checked ~ span::before {
    transform: rotate(-45deg);
    top: 0;
  }
  input:checked ~ span::after {
    transform: rotate(45deg);
    top: 0;
  }
  @media (max-width: 1000px) {
    margin-right: 30px;
    display: flex;
    label,
    span {
      display: block;
    }
  }
`;
