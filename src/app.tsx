import React from "react";
import { ThemeProvider } from "styled-components";
import "./delta-ui/assets/styles/fonts.css"; // Delta-UI fonts
import { GlobalStyle } from "./delta-ui"; // Delta-UI styles
import { darkTheme } from "./delta-ui"; // Delta-UI theme

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div>Delta-UI</div>
    </ThemeProvider>
  );
};

export default App;
