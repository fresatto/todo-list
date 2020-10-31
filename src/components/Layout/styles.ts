import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 400px;
  padding: 24px;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const AddTodoForm = styled.form`
  display: flex;

  > input {
    flex: 1;

    height: 48px;
    padding: 0 16px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 4px;

    margin-right: 16px;

    font-size: 16px;

    &::placeholder {
      color: #909090;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;
    height: 48px;
    width: 48px;
    border-radius: 50%;

    background-color: #40d9b8;
    border: 0;

    transition: 200ms;

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: ${darken(0.1, '#40d9b8')};
    }
  }
`;
