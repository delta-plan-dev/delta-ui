import { createGlobalStyle, ThemeProps } from 'styled-components'
import { ITheme } from '../types/theme'
import { lightTheme } from '../themes/light-theme'
import OpenSansExtraBold from '../assets/fonts/open-sans/OpenSans-ExtraBold.ttf'
import OpenSansExtraBoldItalic from '../assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf'
import OpenSansBold from '../assets/fonts/open-sans/OpenSans-Bold.ttf'
import OpenSansBoldItalic from '../assets/fonts/open-sans/OpenSans-BoldItalic.ttf'
import OpenSansSemiBold from '../assets/fonts/open-sans/OpenSans-SemiBold.ttf'
import OpenSansSemiBoldItalic from '../assets/fonts/open-sans/OpenSans-SemiBoldItalic.ttf'
import OpenSansRegular from '../assets/fonts/open-sans/OpenSans-Regular.ttf'
import OpenSansItalic from '../assets/fonts/open-sans/OpenSans-Italic.ttf'
import OpenSansLight from '../assets/fonts/open-sans/OpenSans-Light.ttf'
import OpenSansLightItalic from '../assets/fonts/open-sans/OpenSans-LightItalic.ttf'
import RobotoBlack from '../assets/fonts/roboto/Roboto-Black.ttf'
import RobotoBlackItalic from '../assets/fonts/roboto/Roboto-BlackItalic.ttf'
import RobotoBold from '../assets/fonts/roboto/Roboto-Bold.ttf'
import RobotoBoldItalic from '../assets/fonts/roboto/Roboto-BoldItalic.ttf'
import RobotoMedium from '../assets/fonts/roboto/Roboto-Medium.ttf'
import RobotoMediumItalic from '../assets/fonts/roboto/Roboto-MediumItalic.ttf'
import RobotoRegular from '../assets/fonts/roboto/Roboto-Regular.ttf'
import RobotoItalic from '../assets/fonts/roboto/Roboto-Italic.ttf'
import RobotoLight from '../assets/fonts/roboto/Roboto-Light.ttf'
import RobotoLightItalic from '../assets/fonts/roboto/Roboto-LightItalic.ttf'
import RobotoThin from '../assets/fonts/roboto/Roboto-Thin.ttf'
import RobotoThinItalic from '../assets/fonts/roboto/Roboto-ThinItalic.ttf'

export const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: url(${OpenSansExtraBold});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 800;
    src: url(${OpenSansExtraBoldItalic});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBold});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    src: url(${OpenSansBoldItalic});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url(${OpenSansSemiBold});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    src: url(${OpenSansSemiBoldItalic});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegular});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: url(${OpenSansItalic});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${OpenSansLight});
  }
  
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 300;
    src: url(${OpenSansLightItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url(${RobotoBlack});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src: url(${RobotoBlackItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url(${RobotoBold});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: url(${RobotoBoldItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${RobotoMedium});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: url(${RobotoMediumItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url(${RobotoItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${RobotoLight});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url(${RobotoLightItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url(${RobotoThin});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: url(${RobotoThinItalic});
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    background-color: ${(props) =>
      props.theme.colors.light.main ?? lightTheme.colors.light.main};
  }
  
  code {
    font-family: 'Roboto', sans-serif;
  }
   
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font: normal bold 38px/42px 'Roboto', sans-serif;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  h2 {
    font: normal bold 24px/32px 'Roboto', sans-serif;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  h3 {
    font: normal bold 16px/20px 'Roboto', sans-serif;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  body {
    font: normal normal 16px/20px 'Roboto', sans-serif;
    color: ${(props) =>
      props.theme.colors.dark.main ?? lightTheme.colors.dark.main};
  }

  a {
    font: normal normal 16px/20px 'Roboto', sans-serif;
    color: ${(props) =>
      props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    text-decoration-line: underline;
  }
  
  ul {
    padding: 0;
    list-style-type: none;
  }

  // // storybook fix
  // .sb-show-main.sb-main-padded {
  //   box-sizing: border-box;
  // }
  //
  // // focus fix
  // *:focus {
  //   outline: none !important;
  // }
`
