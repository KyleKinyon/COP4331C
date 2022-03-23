import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          D&D 25
        </Typography>
        <Button
          onClick={() => {
            alert("Placeholder for log out function");
          }}
          color="inherit"
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
