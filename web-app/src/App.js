import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bb86fc"
    },
    secondary: {
      light: "#66fff9",
      main: "#03dac6",
      contrastText: "#000000"
    },
    background: {
      default: "#f5f5f5"
    }
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main></Main>
      </ThemeProvider>
    );
  }
}

export default App;
