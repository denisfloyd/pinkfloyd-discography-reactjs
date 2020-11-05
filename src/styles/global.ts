import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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

  @keyframes loading-bar-morph {
    0% {
      transform: scaleY(1);
    }
    25% {
      transform: scaleY(0.3);
    }
    50% {
      transform: scaleY(0.7);
    }
    75% {
      transform: scaleY(0.15);
    }
    9% {
      transform: scaleY(1)
    }
  }

  svg.music-playing-svg {
    fill: ${props => props.theme.colors.text};
    opacity: 1;

    rect#loading-bar-left {
      animation: loading-bar-morph 1s linear 0.1s infinite;
      transform-origin: center;
    }
    rect#loading-bar-middle {
      animation: loading-bar-morph 1s linear 0.2s infinite;
      transform-origin: center;
    }
    rect#loading-bar-right {
      animation: loading-bar-morph 1s linear 0.4s infinite;
      transform-origin: center;
    }
  }
`;
