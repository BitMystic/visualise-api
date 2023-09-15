import React from 'react';
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled"
import Header from "./components/Header"
import Body from "./components/Body"
import Results from './components/Results';
import { GlobalStyles } from "./components/styles/Global";

const theme = {
  colors: {
    header: "#e4d5061",
    body: "#4d5061",
    footer: "#003333"
  }
}
function App() {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <>
          <Header />
          <Body />
        </>
    </ThemeProvider>
  )
}
export default App;
