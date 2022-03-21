import { Box, Grid, Button, TextField, Link, Typography } from "@mui/material";
import { useState } from "react";
import request from "../utils/request";

const FieldStyle = {
  backgroundColor: "white",
  borderRadius: "4px",
  marginRight: "0.1rem",
  marginLeft: "0.1rem",
};

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const updateValue = (key: string) => {
    return (e: any) => setForm({ ...form, [key]: e.target.value });
  };

  const submitForm = async () => {
    try {
      if (form.username.trim() === "" || form.username.trim() === "") {
        throw new Error("Empty input field");
      }

      let { data } = await request.post("/auth/login", form);
      console.log(data);
      // TODO: Add redirect when good response
      // TODO: Add error box to sign up
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100vw",
          height: "100vh",
          overflowY: "hidden",
        }}
        className="dragon-background"
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={6}>
            {" "}
            {/*  still deciding between 6,7,and 8  */}
            <Box
              py={4}
              px={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                height: 1,
              }}
            >
              <Typography variant="h5" component="h2">
                Start Your D&D Campaign Today
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <TextField
                  style={FieldStyle}
                  placeholder="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  value={form.username}
                  onChange={updateValue("username")}
                />

                <TextField
                  style={FieldStyle}
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                  value={form.password}
                  onChange={updateValue("password")}
                />

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    submitForm();
                  }}
                  variant="contained"
                  color="error"
                  sx={{ px: 2, my: 1 }}
                >
                  Log In
                </Button>

                <Box my={2}>
                  <Typography variant="subtitle1">
                    Don't have an account?
                    <Link href="/signup" mx={1} underline="none" color="red">
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ width: 1, height: 1 }}></Grid>
        </Grid>
      </Box>
    </>
  );
}
