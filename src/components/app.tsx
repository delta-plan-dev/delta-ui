import React, { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../delta-ui";
import lightTheme from "../delta-ui/themes/light-theme";
import darkTheme from "../delta-ui/themes/datk-theme";
import Switch from "../delta-ui/components/switch";

const getTheme = (): DefaultTheme => {
  return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
};

const getThemeSwitch = (): boolean => {
  return localStorage.getItem("theme") === "dark";
};

const SwitchWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());
  const [themeSwitch, setThemeSwitch] = useState<boolean>(getThemeSwitch());

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
