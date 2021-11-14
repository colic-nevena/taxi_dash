import React from "react";
import { Container, MuiThemeProvider } from "@material-ui/core";
import { useStyles, theme } from "./styles";
import AppRouter from "./components/router/AppRouter";

function App() {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters={true} className={classes.main}>
        <AppRouter />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
