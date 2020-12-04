import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.color1};
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
