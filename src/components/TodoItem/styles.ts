import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px)}
  to { opacity: 1; transform: translateY(0)}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  height: 32px;
  padding: 0 8px 0 16px;

  border-radius: 4px;
  background-color: #eeeeee;

  animation: ${slideIn} 500ms ease-in-out;

  & + div {
    margin-top: 8px;
  }

  span {
    font-size: 14px;
    color: #606060;
  }
`;
