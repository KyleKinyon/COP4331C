import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const cards = [
  {
    image: {
      src: "/images/dnd_img1.jpg",
      alt: "Dragon over a castle",
    },
    title: "Start Your Campaign",
    body: `Grab a group of players, select a DM, and get started. D&D 25's
                campaign manager will make your D&D sessions feel like a breeze,
                whether you are an experienced player or just starting out.`,
    button: {
      route: "/game",
      text: "Start Campaign",
    },
  },
  {
    image: {
      src: "/images/dnd_img2.jpg",
      alt: "Team of adventurers",
    },
    title: "Create Your Character",
    body: `Our interactive character builder guides you through the
                necessary steps to create your own character to use in your D&D
                sessions.`,
    button: {
      route: "/character",
      text: "Create Character",
    },
  },
  {
    image: {
      src: "/images/dnd_img3.jpg",
      alt: "A City of Floating Islands",
    },
    title: "View Maps",
    body: `Curious of the adventure that sets forth? Through the map viewer, 
						you may understand the hardships that will be upon you.`,
    button: {
      route: "/maps",
      text: "Start Map",
    },
  },
];

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: 1, height: 1, backgroundColor: "rgba(75,21,31, 0.1)" }}
      >
        <Navbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            overflowY: "auto",
            height: 1,
            width: 1,
          }}
          py={2}
        >
          {cards.map((item, i) => (
            <Card key={i} sx={{ maxWidth: 500, margin: "1rem" }}>
              <CardMedia
                component="img"
                src={item.image.src}
                alt={item.image.alt}
                height="400"
              />
              <CardContent>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body2" my={1}>
                  {item.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => nav(item.button.route)}
                  variant="contained"
                  color="primary"
                >
                  {item.button.text}
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
