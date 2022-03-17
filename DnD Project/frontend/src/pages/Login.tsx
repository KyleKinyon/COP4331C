import {
  Box,
  Grid,
  Button,
  TextField,
  Link,
  Typography,
  styled,
  ImageList,
  CssBaseline,
} from "@mui/material";
import "./styles.css";

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
      <div className="login-signup-background">
      <CssBaseline/>
      <Box
        sx={{
          flexGrow: 1,
          width: `100vw`,
          height: "100vh",
          // overflowY: "hidden",
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={7}>
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
                sx={{ display: "flex", flexDirection: "column", width: "40%" }}
              >
                <StyledTextField
                  // style={{
                  //   backgroundColor: "white",
                  //   borderColor: "white",
                  //   borderRadius: "4px",
                  // }}
                  // InputLabelProps={{ style: { color: "grey" } }}
                  // InputProps={{
                  //  style: { borderColor: "black", color: "black" },
                  // }}
                  style={{
                    backgroundColor: "white",
                  }}
                  label="Username"
                  type="text"
                  autoComplete="current-password"
                  margin="dense"
                />

                <StyledTextField
                  style={{
                    backgroundColor: "white",
                  }}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />

                <Button onClick={() => { alert('Placeholder for login function');}} variant="contained" color="error" sx={{ px: 2 }}>
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
          <Grid item xs={4} sx={{ width: 1, height: 1 }}>
            {/* <Box
              sx={{
                height: 1,
                width: 1,
                backgroundImage:
                  "url(https://i.pinimg.com/originals/95/4c/31/954c316be675cee73eb91306bc1bb954.jpg)",
                backgroundSize: "cover",
              }}
            >
              {/* <img
                src="https://i.pinimg.com/originals/95/4c/31/954c316be675cee73eb91306bc1bb954.jpg"
                alt="Scary Underground Dragon"
                loading="lazy"
              /> 
            </Box> */}
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  );
}
