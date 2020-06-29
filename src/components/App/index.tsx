import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../themes";
import lightTheme from "../../themes/Light";
import darkTheme from "../../themes/Dark";
import Switch from "../Switch";

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme === "light" ? lightTheme : darkTheme;
  else return lightTheme;
};

const getThemeSwitch = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme !== "light";
  else return false;
};

const SwitchWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const [theme, setTheme] = useState(getTheme);
  const [themeSwitch, setThemeSwitch] = useState<boolean>(getThemeSwitch);
  const handleChangeTheme = () => {
    if (themeSwitch) {
      setTheme(lightTheme);
      setThemeSwitch(false);
      localStorage.setItem("theme", "light");
    } else {
      setTheme(darkTheme);
      setThemeSwitch(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SwitchWrapper>
        <Switch
          title={themeSwitch ? "Dark" : "Light"}
          handleChange={handleChangeTheme}
          value={themeSwitch}
        />
      </SwitchWrapper>
    </ThemeProvider>
  );
};

export default App;
