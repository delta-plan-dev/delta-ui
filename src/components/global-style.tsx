import { createGlobalStyle, ThemeProps } from 'styled-components';
import { ITheme } from '../types/theme';
import { lightTheme } from '../themes/light-theme';

export const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
  body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    background-color: ${(props) =>
      props.theme.colors.main.main ?? lightTheme.colors.main.main};
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
   
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font: normal bold 38px/42px OpenSans;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  h2 {
    font: normal bold 24px/32px OpenSans;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  h3 {
    font: normal bold 16px/20px OpenSans;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  body {
    font: normal normal 16px/20px OpenSans;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  a {
    font: normal normal 16px/20px OpenSans;
    color: ${(props) =>
      props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    text-decoration-line: underline;
  }
  
  ul {
    padding: 0;
    list-style-type: none;
  }

  // storybook fix
  .sb-show-main.sb-main-padded {
    box-sizing: border-box;
  }
  
  // focus fix
  *:focus {
    outline: none !important;
  }
`;
