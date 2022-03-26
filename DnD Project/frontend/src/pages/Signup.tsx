import { Box, Grid, Button, TextField, Typography, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import request from "../utils/request";

const FieldStyle = {
  backgroundColor: "white",
  borderRadius: "4px",
  marginRight: "0.1rem",
  marginLeft: "0.1rem",
};

export default function Signup() {
  const [confirmPass, setConfirmPass] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

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
      if (confirmPass !== form.password) {
        throw new Error("Passwords do not match");
      }

      if (Object.values(form).some((item) => item.trim() === "")) {
        throw new Error("Empty fields");
      }

      setErrorEncountered(false);

      let { data } = await request.post("/auth/signup", form);
      console.log(data);
      // TODO: Add redirect when good response
      // TODO: Make error box not look ass 
    } catch (error) {
      if (error instanceof Error)
      {
        console.error(error);
        setErrorMessage(error.toString());
        setErrorEncountered(true);
        document.getElementById("errorMessage")!.innerHTML = errorMessage;
      }
    }
  };

  return (
    <>
      <Box sx={{ height: 1 }} className="dragon-background">
        <Grid container sx={{ height: 1 }}>
          <Grid item xs={6} sx={{ height: 1, backgroundColor: "gray" }}>
            <Box
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
                opacity: errorEncountered ? 1 : 0
              }}/>

              <Typography variant="h4" component="h2" my={2}>
                Start Your D&D Campaign Today
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "65%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "",
                  }}
                >
                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    type="text"
                    autoComplete="current-password"
                    margin="dense"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={updateValue("firstName")}
                    fullWidth
                  />

                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    type="text"
                    autoComplete="current-password"
                    margin="dense"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={updateValue("lastName")}
                    fullWidth
                  />
                </Box>

                <TextField
                  style={FieldStyle}
                  id="outlined-basic"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  placeholder="Email"
                  value={form.email}
                  onChange={updateValue("email")}
                  fullWidth
                />

                <TextField
                  style={FieldStyle}
                  id="outlined-basic"
                  placeholder="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  onChange={updateValue("username")}
                  fullWidth
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    placeholder="Password"
                    type="password"
                    autoComplete="password"
                    margin="dense"
                    onChange={updateValue("password")}
                    fullWidth
                  />

                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    fullWidth
                  />
                </Box>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    submitForm();
                  }}
                  variant="contained"
                  color="error"
                  sx={{ px: 2, py: 1, my: 1 }}
                >
                  Create Account
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </>
  );
}
