import { Box, Grid, Button, TextField, Link, Typography, CssBaseline } from "@mui/material";
import "./styles.css";

export default function Signup() {
  return (
    <>
      <div className="login-signup-background">
      <CssBaseline/>
      <Box sx={{ flexGrow: 1, width: `100vw`, height: "100vh", overflowY: "hidden"}}>
        <Grid container spacing={2} sx={{ height: 1 }}>
          <Grid item xs={6}>
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
                height: "100vh",
              }}
            >
              <Typography variant="h5" component="h2">
                Start Your D&D Campaign Today
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", width: "40%" }}
              >
                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  placeholder="First Name"
                />

                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  placeholder="Last Name"
                />

                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  placeholder="Email"
                />

                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  placeholder="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                />

                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                />

                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  id="outlined-basic"
                  placeholder="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                />

                <Button onClick={() => { alert('Placeholder for create account function');}} variant="contained" color="error" sx={{ px: 2, my: 1}}>
                  Create Account
                </Button>

                <Box my={2}>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            xs=8
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  );
}
