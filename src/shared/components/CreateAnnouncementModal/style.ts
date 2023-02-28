import styled from "styled-components";

export const SelectableButton = styled.button<{ isSelected?: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? "var(--brand2)" : "white"};
  color: ${(props) => (props.isSelected ? "white" : "var(--brand2)")};
  transition: 0.2s;
  padding: 8px 16px;
  border: 1.5px solid var(--grey2);
  border-radius: 4px;
  width: 228px;
  height: 48px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 18px;
  border-radius: 5px;
  position: relative;
  width: 90%;
  height: 90%;
  overflow-y: scroll;
  max-width: 520px;
  gap: 20px;
  z-index: 10;
  &::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
  margin: 3px;
}

&::-webkit-scrollbar
{
	width: 7px;
	background-color: #F5F5F5;
  margin: 3px;
}

&::-webkit-scrollbar-thumb
{
	border-radius: 5px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: lightgrey;
}

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .selectableContainer {
    display: flex;
    font-size: 16px;
    gap: 15px;
    width: 100%;
  }
  .carInfo {
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: column;
    .yearKmPrice {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      flex-wrap: wrap;
    }
    .carImage {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;
