import { useEffect } from "react";
import { Link } from "@mui/material";

export default function FrontPage() {
  useEffect(() => console.log(process.env.REACT_APP_BACKEND_ADDRESS), []);

  return (
    <div>
      <h1>Front page</h1>
      <p>Hello World!</p>
      <div>
        <Link href="/login" mx={1}>
          Login
        </Link>
        <Link href="/signup" mx={1}>
          Sign up
        </Link>
        <Link href="/dashboard" mx={1}>
          Front Page
        </Link>
      </div>
    </div>
  );
}
