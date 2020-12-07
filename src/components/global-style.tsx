import { createGlobalStyle, ThemeProps } from 'styled-components';
import { ITheme } from '../types/theme';

export const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
  body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily};
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  #root main {
    position: relative;
    overflow: auto;
    flex-grow: 1;
  }
   
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .75rem;
  }
  
  ul {
    padding: 0;
    list-style-type: none;
  }
`;
