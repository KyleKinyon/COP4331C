import { Box, Grid, Button, TextField, Alert } from "@mui/material";
import request from "../utils/request";
import { useParams, useNavigate } from "react-router-dom";

const FieldStyle = {
  backgroundColor: "white",
  borderRadius: "4px",
  marginRight: "0.1rem",
  marginLeft: "0.1rem",
};

export default function Verify() {
  const { username } = useParams();
  const navigation = useNavigate();

  const VerifyAccount = async () => {
    try {
      await request.post("/auth/verifyUser", { username });
    } catch (error) {}
    navigation("/login");
  };

  // TODO: Replace temporary UI for testing with actual good UI.
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "",
                  }}
                ></Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                ></Box>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
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
