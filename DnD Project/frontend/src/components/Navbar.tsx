import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import req from "../utils/request";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    req
      .post("/auth/logout")
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
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
            console.log("Logging out");
            logout();
          }}
          color="inherit"
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
