import { Box, Button, CardMedia } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
        <Navbar />

        <CardMedia
          component="img"
          src={"images/dnd_img1.jpg"}
          alt="img1"
        />
        <Box
          position="static"
          display="flex"
          width={1300}
          height={100}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          {/* <Typography variant="h5">START YOUR CAMPAIGN</Typography> */}
          <h1>START YOUR CAMPAIGN</h1>
        </Box>

        <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <p>
            Grab a group of players, select a DM, and get started. D&D 25's
            campaign manager will make your D&D sessions feel like a breeze,
            whether you are an experienced player or just starting out.
          </p>
        </Box>

        <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Button
            onClick={() => {
              alert("Placeholder for Start Campaign function");
            }}
            variant="contained"
          >
            Start Campaign
          </Button>
        </Box>

        <CardMedia
          component="img"
          height="575"
          width="200"
          src={"/images/dnd_img2.jpg"}
          alt="img1"
        />

        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <h1>CREATE YOUR CHARACTER</h1>
        </Box>

        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <p>
            Our interactive character builder guides you through the necessary
            steps to create your own character to use in your D&D sessions.
          </p>
        </Box>

        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Button
            onClick={() => {
              alert("Placeholder for Create Character function");
            }}
            variant="contained"
          >
            CREATE CHARACTER
          </Button>
        </Box>

        <CardMedia
          component="img"
          height="575"
          width="200"
          src={"/images/dnd_img3.jpg"}
          alt="img1"
        />
        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <h1>BUILD YOUR WORLD</h1>
        </Box>

        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <p>
            Struggling to visualize your campaign? No problem. Select from our
            list of pre-created campaign maps or upload maps of your own for
            your D&D sessions to take place in.
          </p>
        </Box>

        <Box
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Button
            onClick={() => {
              alert("Placeholder for Start Map function");
            }}
            variant="contained"
          >
            START MAP
          </Button>
        </Box>
      </Box>
    </>
  );
}
