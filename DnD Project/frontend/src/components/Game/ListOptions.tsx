import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Slider,
} from "@mui/material";
import { useContext, useState } from "react";
import { gameContext } from "./GameContext";
import Dropdown from "../General/Dropdown";

export default function ListOptions() {
  const { setCircleSize } = useContext(gameContext);

  return (
    <>
      <Dropdown title="Options">
        <ListItem
          onClick={() => {}}
          sx={{
            cursor: "pointer",
          }}
          divider
        >
          <ListItemButton>
            <ListItemText primary={"Load Session"} />
          </ListItemButton>
        </ListItem>

        <Box p={3}>
          <Slider
            onChange={(e, newVal) => {
              e.preventDefault();
              setCircleSize(newVal as number);
            }}
            aria-label="Temperature"
            valueLabelDisplay="auto"
            defaultValue={5}
            step={1}
            min={5}
            max={15}
            marks
          />
        </Box>
      </Dropdown>
    </>
  );
}
