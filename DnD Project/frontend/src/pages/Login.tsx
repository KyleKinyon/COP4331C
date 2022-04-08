import {
  Box,
  Grid,
  Button,
  TextField,
  Link,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import request from "../utils/request";

const FieldStyle = {
  backgroundColor: "white",
  borderRadius: "4px",
  marginRight: "0.1rem",
  marginLeft: "0.1rem",
};

export default function Login() {
  const navigation = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // TODO: finish implementing error box
  // unused vars causes build errors
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEncountered, setErrorEncountered] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const updateValue = (key: string) => {
    return (e: any) => {
      setForm({ ...form, [key]: e.target.value });
      key === "password" ? setPasswordIsValid(true) : setUsernameIsValid(true);
      setErrorEncountered(false);
    };
  };

  const submitForm = async () => {
    try {
      if (form.username.trim() === "" || form.password.trim() === "") {
        if (form.username.trim() === "") setUsernameIsValid(false);
        if (form.password.trim() === "") setPasswordIsValid(false);
        return;
      }

      setErrorEncountered(false);
      await request.post("/auth/login", form);
      navigation("/dashboard");

      // TODO: Make error box not look ass
    } catch (error) {
      setErrorEncountered(true);
      setErrorMessage((error as any)?.response.data.error);
    }
  };
  
  const submitEmail = async () => {
    try {
      if (form.username.trim() === "") {
        throw new Error("Please enter your email");
      }

      setErrorEncountered(false);
      await request.post("/auth/getUserId", form.username);
      setEmailSent(true);
      // Once we have id send an email that contains their id and directs them to reset password page
    } catch (error) {
      setErrorEncountered(true);
      setErrorMessage((error as any)?.response.data.error)
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
              {errorEncountered && (
                <Alert severity="error" id="errorMessage">
                  {errorMessage}
                </Alert>
              )}

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
                  id="username"
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
                  <Typography variant="subtitle1">
                    Forgot your password? Type in your email and click
                    <Button onClick={(e) => {
                      e.preventDefault();
                      submitEmail();
                    }}
                    sx={{ color: "white", fontFamily: "Roboto", fontweight: 400}}>
                      here
                    </Button>
                  </Typography>
                  {emailSent && (
                    <Alert id="emailSent">
                      Please check your email to finish resseting your password
                    </Alert>
                  )}
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
