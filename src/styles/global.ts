import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --drawer-width: 300;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #202020;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'DM Sans', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
