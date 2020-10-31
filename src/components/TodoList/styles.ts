import styled, { css } from 'styled-components';

interface ContainerProps {
  hasItems: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  flex: 1;
  border-radius: 4px;
  margin-top: 24px;

  > p {
    font-size: 12px;
    color: #606060;
  }

  ${props =>
    !props.hasItems &&
    css`
      justify-content: center;
      align-items: center;

      border: 1px dotted #ccc;
      background-color: #f2f2f2;
    `}
`;
