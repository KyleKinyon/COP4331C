import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: "#006400"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

export default function LobbyBar() {
  return (
       <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          D&D 25
        </Typography>
        <Button
          onClick={() => {
            alert("Placeholder for Quit Lobby function");
          }}
          color="inherit"
        >
          Quit
        </Button>
      </Toolbar>
    </AppBar>
</ThemeProvider>
  );
}
