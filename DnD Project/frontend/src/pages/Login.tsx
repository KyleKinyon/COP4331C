import { Box, Grid, Button, TextField, Link, Typography, Alert } from "@mui/material";
import { useEffect, useState } from "react";
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

  const [usernameIsValid, setUsernameIsValid] = useState(true); // Leaving in case we decide to implement
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEncountered, setErrorEncountered] = useState(false);

  useEffect(() => {
    document.getElementById("errorMessage")!.innerHTML = errorMessage;
  }, [errorMessage, setErrorMessage]);


  const updateValue = (key: string) => {
    return (e: any) => setForm({ ...form, [key]: e.target.value });
  };

  const submitForm = async () => {
    try {
      if (form.username.trim() === "" || form.password.trim() === "")
        throw new Error("Empty input field");

      setErrorEncountered(false);

      let { data } = await request.post("/auth/login", form);
      console.log(data);
      // TODO: Add redirect when good response

      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "/Dashboard";
      

      // TODO: Make error box not look ass 
    } catch (error) {
      if (error instanceof Error)
      {
        console.error(error);
        setErrorEncountered(true);
        setErrorMessage(error.name + ": " + error.message);
        document.getElementById("errorMessage")!.innerHTML = errorMessage;
      }
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
              <Alert severity="error" id="errorMessage" sx={{
                opacity: errorEncountered ? 1 : 0,
              }}>
                Placeholder
              </Alert>

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
                  error={!usernameIsValid}
                  helperText={!usernameIsValid ? "Please enter a username" : ""}
                />

                <TextField
                  style={FieldStyle}
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                  value={form.password}
                  onChange={updateValue("password")}
                  error={!passwordIsValid}
                  helperText={!passwordIsValid ? "Please enter a password" : ""}
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
