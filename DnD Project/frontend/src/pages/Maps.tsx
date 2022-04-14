import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

const drawerWidth = 240;
const maps = [
  {
    link: "/images/map_AbandonedTunnels.jpg",
    name: "Abandoned Tunnels",
  },
  {
    link: "/images/map_LavaVault.jpg",
    name: "Lava Vault",
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
    link: "/images/map_FireArena.jpg",
    name: "Fire Arena",
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
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: 1, height: 1, backgroundColor: "rgba(75,21,31, 0.1)" }}
      >
        <img src={chosenMap.link} alt={chosenMap.name} />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          {maps.map((item, i) => (
            <ListItem
              key={i}
              onClick={() => setChosenMap(item)}
              sx={{ cursor: "pointer" }}
              divider
            >
              <ListItemButton>
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </Drawer>
      </Box>
    </Box>
  );
}
