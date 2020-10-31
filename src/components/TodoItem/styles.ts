import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;

  width: 100%;

  height: 32px;
  padding: 0 16px;

  border-radius: 4px;
  background-color: #eeeeee;

  & + div {
    margin-top: 8px;
  }

  span {
    font-size: 14px;
    color: #606060;
  }

  button {
    background: transparent;
    border: 0;

    img {
      width: 12.44px;
      height: 16px;
    }
  }
`;
