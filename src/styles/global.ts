import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --drawer-width: 255;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
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
