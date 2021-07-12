# Deltaplan Group UI library

## Install

Run this command to get delta-ui and all dependencies:

```console
npm i delta-ui@last react-datepicker@3.4.1 react-select@4.3.0 styled-components@5.2.1
```

## How to use

Add theme-provider and global-style:

```type-script
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'delta-ui'

<ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    {/* your app /*}
</ThemeProvider>
```
