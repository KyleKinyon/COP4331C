import { useEffect } from "react";
import { Link } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

export default function Dashboard() {
  useEffect(() => console.log(process.env.REACT_APP_BACKEND_ADDRESS), []);

  return (
    <>
      <div>
        <h1>DND 25</h1>
        <Button variant="contained">Contained</Button>
        <p>Hello World!</p>
        <div>
          <Link href="/login" mx={1}>
            Login
          </Link>
          <Link href="/signup" mx={1}>
            Sign up
          </Link>
        </div>
      </div>

      
    </>
  );
}
