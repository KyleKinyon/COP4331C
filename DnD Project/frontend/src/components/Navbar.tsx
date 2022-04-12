import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Person, SportsEsports, Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import req from "../utils/request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavProps {
  fixed?: boolean;
  back?: boolean;
}

export default function Navbar({ fixed, back }: NavProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const routes = [
    {
      name: "Home",
      link: "/dashboard",
      icon: <Home />,
    },
    {
      name: "Start New Campaign",
      link: "/lobby",
      icon: <SportsEsports />,
    },
    {
      name: "Characters",
      link: "/character",
      icon: <Person />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <Settings />,
    },
  ];

  const logout = () => {
    req
      .post("/auth/logout")
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <AppBar position={fixed ? "fixed" : "static"}>
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

          <Button
            onClick={() => {
              back ? logout() : navigate(-1);
            }}
            color="inherit"
          >
            {back ? "Go Back" : "Logout"}
          </Button>
        </Toolbar>

        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            {routes.map((item, i) => (
              <ListItem
                key={i}
                onClick={() => navigate(item.link)}
                sx={{ cursor: "pointer" }}
                divider
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  );
}
