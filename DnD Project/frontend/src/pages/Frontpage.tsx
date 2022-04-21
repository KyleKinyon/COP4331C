import { Box, Grid, Typography } from "@mui/material";
import FloatingBar from "../components/FrontPage/Floatingbar";

export default function FrontPage() {
  return (
    <Box
      width={1}
      height={1}
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        // backgroundImage: "url('/images/frontpage.jpg')",
        // backgroundSize: "cover",
      }}
    >
      <FloatingBar />
      <Grid container width={1} height={1} columns={5}>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "rgba(128, 128, 128, 0.5)",
          }}
        >
          <Box
            height={1}
            width={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography variant="h4" textAlign="center">
              DnD 25
            </Typography>

            <Typography variant="h5" textAlign="center">
              A Dungeons and Dragons Manager to aid your sessions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}
