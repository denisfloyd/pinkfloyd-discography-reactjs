import { createGlobalStyle, ThemeProviderProps } from 'styled-components';

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
    background: ${({ theme }): ThemeProviderProps => theme.body};
    color: ${({ theme }) => theme.text};
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
