import React from "react";
import Routes from "./Routes";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

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

export default function App() {
  const [auth, setAuth] = React.useState({
    isAuthenticated: false,
    token: ""
  });

  function updateAuth(status) {
    setAuth({ ...auth, isAuthenticated: status });
  }

  function updateToken(token) {
    setAuth({ ...auth, token: token });
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes appProps={{ auth, updateAuth, updateToken }} />
    </ThemeProvider>
  );
}
