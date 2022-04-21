import { Box, Grid, Button, Typography } from "@mui/material";
import request from "../utils/request";
import { useParams, useNavigate } from "react-router-dom";

export default function Verify() {
  const { username } = useParams();
  const navigation = useNavigate();

  const VerifyAccount = async () => {
    try {
      request
        .post("/auth/verifyUser", { username })
        .then(() => navigation("/dashboard"));
    } catch (error) {
      console.log("Issue with verifying user.");
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "65%",
                }}
              >
                <Typography variant="h4">
                  Click below to verify your account!
                </Typography>

                <Button
                  onClick={(e) => {
                    VerifyAccount();
                  }}
                  variant="contained"
                  color="error"
                  sx={{ px: 2, py: 1, my: 1 }}
                >
                  Verify Account
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
