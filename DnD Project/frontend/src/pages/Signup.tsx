import { Box, Grid, Button, TextField, Typography } from "@mui/material";

const FieldStyle = {
  backgroundColor: "white",
  borderRadius: "4px",
  marginRight: "0.1rem",
  marginLeft: "0.1rem",
};

export default function Signup() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: 1,
          height: 1,
        }}
        className="dragon-background"
      >
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
                  }}
                >
                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    type="text"
                    autoComplete="current-password"
                    margin="dense"
                    placeholder="First Name"
                  />

                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    type="text"
                    autoComplete="current-password"
                    margin="dense"
                    placeholder="Last Name"
                  />
                </Box>

                <TextField
                  style={FieldStyle}
                  id="outlined-basic"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                  placeholder="Email"
                />

                <TextField
                  style={FieldStyle}
                  id="outlined-basic"
                  placeholder="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
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
                    autoComplete="current-password"
                    margin="dense"
                  />

                  <TextField
                    style={FieldStyle}
                    id="outlined-basic"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                  />
                </Box>

                <Button
                  onClick={() => {
                    alert("Placeholder for create account function");
                  }}
                  variant="contained"
                  color="error"
                  sx={{ px: 2, py: 1, my: 1 }}
                >
                  Create Account
                </Button>

                <Box my={2}></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </>
  );
}
