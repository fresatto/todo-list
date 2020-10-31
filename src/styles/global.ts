import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: Roboto, sans-serif;
  }

  input, button {
    outline: 0;
  }
`;
