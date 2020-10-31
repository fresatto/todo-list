import styled from 'styled-components';

interface ContainerProps {
  hasItems: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  flex: 1;
  border-radius: 4px;
  margin-top: 24px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  border: 1px dotted #ccc;
  background-color: #f2f2f2;

  > p {
    font-size: 12px;
    color: #606060;
  }
`;
