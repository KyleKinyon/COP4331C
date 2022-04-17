import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useContext, useState } from "react";
import { gameContext } from "./GameContext";
import { MapList } from "../../utils/interfaces";

export default function MapDropdown() {
  const { setChosenMap, maps } = useContext(gameContext);
  const [showMaps, setShowMaps] = useState(false);

  return (
    <List sx={{}}>
      <ListItemButton onClick={() => setShowMaps(!showMaps)}>
        <ListItemText primary="Maps" />
        {showMaps ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={showMaps} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {maps.map((item: MapList, i: number) => (
            <ListItem
              key={i}
              onClick={() => {
                setChosenMap(item);
                setShowMaps(false);
              }}
              sx={{ cursor: "pointer" }}
              divider
            >
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
