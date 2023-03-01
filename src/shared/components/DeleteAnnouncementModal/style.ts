import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background-color: #ff3838;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: #e1e1e1;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`;