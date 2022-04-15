import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

const maps = [
  {
    link: "/images/map_LavaVault.jpg",
    name: "Lava Vault",
  },
  {
    link: "/images/map_FireArena.jpg",
    name: "Fire Arena",
  },
  {
    link: "/images/map_AncientDesertTemple.jpg",
    name: "Ancient Desert Temple",
  },
  {
    link: "/images/map_DesertCatacombs.jpg",
    name: "Desert Catacombs",
  },
  {
    link: "/images/map_DesertIslandTropic.jpg",
    name: "Desert Island Tropic",
  },
  {
    link: "/images/map_MountainTopMonastery.jpg",
    name: "Mountain Top Monastery",
  },
  {
    link: "/images/map_MountainTopMonasteryInterior.jpg",
    name: "Mountain Top Monastery Interior",
  },
  {
    link: "/images/map_ArcadeCenter.jpg ",
    name: "Arcade Center",
  },
  {
    link: "/images/map_ClearForest.jpg",
    name: "Clear Forest",
  },
  {
    link: "/images/map_RiverFort.jpg",
    name: "River Fort",
  },
  {
    link: "/images/map_NomadicCamp.jpg",
    name: "Nomadic Camp",
  },
  {
    link: "/images/map_SpringLake.jpg",
    name: "Spring Lake",
  },
  {
    link: "/images/map_TownCenter.jpg",
    name: "Town Center",
  },
  {
    link: "/images/map_HauntedGraveyard.jpg",
    name: "Haunted Graveyard",
  },
  {
    link: "/images/map_AbandonedTunnels.jpg",
    name: "Abandoned Tunnels",
  },
  {
    link: "/images/map_HotSprings.jpg ",
    name: "Hot Springs",
  },
  {
    link: "/images/map_WizardSchoolClassroom.jpg",
    name: "Wizard School Classroom",
  },
  {
    link: "/images/map_WizardSchoolCourtyard.jpg",
    name: "Wizard School Courtyard",
  },
];

export default function Maps() {
  const [chosenMap, setChosenMap] = useState(maps[0]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: 1,
        height: 1,
        backgroundColor: "rgba(75,21,31, 0.1)",
      }}
    >
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: 1,
          height: 1,
          backgroundColor: "rgba(75,21,31, 0.1)",
          overflow: "hidden",
        }}
      >
        <Grid container columns={4} height={1} width={1} overflow="hidden">
          <Grid item xs={3}>
            <Box
              sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={chosenMap.link}
                alt={chosenMap.name}
                style={{
                  alignSelf: "center",
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={1}
            sx={{
              background: "white",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <List sx={{}}>
              {maps.map((item, i) => (
                <ListItem
                  key={i}
                  onClick={() => setChosenMap(item)}
                  sx={{ cursor: "pointer" }}
                  divider
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
