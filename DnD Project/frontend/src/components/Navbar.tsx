import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import req from "../utils/request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    req
      .post("/auth/logout")
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            D&D 25
          </Typography>

          <Button onClick={() => logout()} color="inherit">
            Log Out
          </Button>
        </Toolbar>

        <Drawer open={open} onClose={() => setOpen(false)}>
          {/* TODO: Have this list the different routes you can go */}
          <div>Drawer</div>
        </Drawer>
      </AppBar>
    </>
  );
}
