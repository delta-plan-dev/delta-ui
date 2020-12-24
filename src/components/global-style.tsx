import { createGlobalStyle, ThemeProps } from 'styled-components';
import { ITheme } from '../types/theme';
import MontserratBlack from './../assets/fonts/montserrat/Montserrat-Black.ttf';
import MontserratBlackItalic from './../assets/fonts/montserrat/Montserrat-BlackItalic.ttf';
import MontserratExtraBold from './../assets/fonts/montserrat/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItalic from './../assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf';
import MontserratBold from './../assets/fonts/montserrat/Montserrat-Bold.ttf';
import MontserratBoldItalic from './../assets/fonts/montserrat/Montserrat-BoldItalic.ttf';
import MontserratSemiBold from './../assets/fonts/montserrat/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from './../assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf';
import MontserratMedium from './../assets/fonts/montserrat/Montserrat-Medium.ttf';
import MontserratMediumItalic from './../assets/fonts/montserrat/Montserrat-MediumItalic.ttf';
import MontserratRegular from './../assets/fonts/montserrat/Montserrat-Regular.ttf';
import MontserratItalic from './../assets/fonts/montserrat/Montserrat-Italic.ttf';
import MontserratLight from './../assets/fonts/montserrat/Montserrat-Light.ttf';
import MontserratLightItalic from './../assets/fonts/montserrat/Montserrat-LightItalic.ttf';
import MontserratExtraLight from './../assets/fonts/montserrat/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItalic from './../assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf';
import MontserratThin from './../assets/fonts/montserrat/Montserrat-Thin.ttf';
import MontserratThinItalic from './../assets/fonts/montserrat/Montserrat-ThinItalic.ttf';

export const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    src: url(${MontserratBlack});
  }

  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 900;
    src: url(${MontserratBlackItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    src: url(${MontserratExtraBold});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 800;
    src: url(${MontserratExtraBoldItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src: url(${MontserratBold});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 700;
    src: url(${MontserratBoldItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    src: url(${MontserratSemiBold});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    src: url(${MontserratSemiBoldItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    src: url(${MontserratMedium});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 500;
    src: url(${MontserratMediumItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src: url(${MontserratRegular});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 400;
    src: url(${MontserratItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    src: url(${MontserratLight});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 300;
    src: url(${MontserratLightItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 200;
    src: url(${MontserratExtraLight});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 200;
    src: url(${MontserratExtraLightItalic});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 100;
    src: url(${MontserratThin});
  }
  
  @font-face {
    font-family: Montserrat;
    font-style: italic;
    font-weight: 100;
    src: url(${MontserratThinItalic});
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.secondary};
    font-family: Montserrat, sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  #root {
    // display: flex;
    // flex-direction: column;
    // position: absolute;
    // width: 100%;
    // height: 100%;
  }
  
  #root main {
    // position: relative;
    // overflow: auto;
    // flex-grow: 1;
  }
   
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  ul {
    padding: 0;
    list-style-type: none;
  }

  // storybook fix
  .sb-show-main.sb-main-padded {
    box-sizing: border-box;
  }
`;
