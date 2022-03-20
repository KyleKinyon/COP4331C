import {
  Box,
  Grid,
  Button,
  TextField,
  Link,
  Typography,
  styled,
} from "@mui/material";

const StyledTextField = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
    color: black;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
    color: black;
  }

  & .MuiFormLabel-root-MuiInputLabel-root {
    color: black;
  }
`;

export default function Login() {
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
                height: "100vh",
                spacing: "0",
              }}
            >
              <Typography variant="h5" component="h2">
                Start Your D&D Campaign Today
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                }}
              >
                <StyledTextField
                  style={{
                    backgroundColor: "white",
                  }}
                  placeholder="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                />

                <StyledTextField
                  style={{
                    backgroundColor: "white",
                  }}
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                />

                <Button
                  onClick={() => {
                    alert("Placeholder for login function");
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
