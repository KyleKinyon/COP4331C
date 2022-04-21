import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const features = [
  "Character sheet creation and management",
  "Session hosting and visualization",
  "Viewable session histories",
  "Over a dozen maps to choose from",
];

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <Box
      width={1}
      height={1}
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/images/frontpage.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Grid container width={1} height={1} columns={6}>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box
            height={1}
            width={1}
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography variant="h4" textAlign="center">
              D&Dy
            </Typography>
            <Typography variant="h5" textAlign="center" mt={2}>
              A Dungeons and Dragons Manager to aid your sessions.
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              my={2}
            >
              <Box px={4}>
                <ul style={{ width: "100%" }}>
                  {features.map((item, i) => (
                    <li>
                      <Typography key={i} variant="body1">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>

            <Box my={2} width={1} display="flex" justifyContent="center">
              <Button variant="contained" onClick={() => navigate("/signup")}>
                Click here to start your journey.
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
}
