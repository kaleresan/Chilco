import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      light: '#66fff9',
      main: '#03dac6',
      contrastText: '#000000',
    },
    background: {
      default: "#212121"
    }
  },
});

class App extends Component {
  render() {
    return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn></SignIn>
    </ThemeProvider>
  );
  }
}

export default App;
