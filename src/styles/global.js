import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.currentTheme.backgroundColor};
    color: ${(props) => props.theme.currentTheme.textColor};
    font-family: sans-serif;
  }
`;
