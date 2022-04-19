import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useContext } from "react";
import { gameContext } from "./GameContext";
import { MapList } from "../../utils/interfaces";
import Dropdown from "../General/Dropdown";

export default function MapDropdown() {
  const { setChosenMap, maps } = useContext(gameContext);

  return (
    <Dropdown title="Maps">
      {maps.map((item: MapList, i: number) => (
        <ListItem
          key={i}
          onClick={() => {
            setChosenMap(item);
          }}
          sx={{ cursor: "pointer" }}
          divider
        >
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </Dropdown>
  );
}
