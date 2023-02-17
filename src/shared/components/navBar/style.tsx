import styled from "styled-components";
import { theme } from "../../../styles/theme";

export interface Props {
  authenticaded?: string;
  open?: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  gap: 690px;
  position: fixed;
  width: 100vw;
  height: 80px;
  background: ${theme.colors.grey10};
  border-bottom: 2px solid ${theme.colors.grey6};
`;

export const Text = styled.image`
  width: 153.02px;
  height: 26.34px;
  background-image: url(src/assets/Motors_shop.png);
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
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
