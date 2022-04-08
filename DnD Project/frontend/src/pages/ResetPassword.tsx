import { Box, Grid, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import request from "../utils/request";

const FieldStyle = {
    backgroundColor: "white",
    borderRadius: "4px",
    marginRight: "0.1rem",
    marginLeft: "0.1rem",
};

export default function ResetPassword() {
    const nav = useNavigate();

    const [form, setForm] = useState({
        password: "",
        confirmPassword: "",
    });

    const [errorEncountered, setErrorEncountered] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const submitForm = async () => {
        
        try {
            if (!form.password || !form.confirmPassword) {
                throw new Error("Empty fields");
            }
            if (form.password !== form.confirmPassword) {
                throw new Error("Passwords do not match");
            }

            setErrorEncountered(false);

            request.post("/user/resetPassword", form.password).then(() => nav("/login"));


        } catch (error) {
            setErrorEncountered(true);
            setErrorMessage(
            (error as any)?.response?.data.error || (error as Error).toString()
        );
        }
    };
    
    const updateValue = (key: string) => {
        return (e: any) => {
          setForm({ ...form, [key]: e.target.value });
          setErrorEncountered(false);
        };
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
                  {errorEncountered && (
                    <Alert severity="error" id="errorMessage">
                      {errorMessage}
                    </Alert>
                  )}
    
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
                    </Box>
    
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
                        value={form.password}
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
                        value={form.confirmPassword}
                        onChange={updateValue("confirmPassword")}
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
                      Reset Password
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