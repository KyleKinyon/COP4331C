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
import LoadGameModal from "./LoadGameModal";

export default function ListOptions() {
  const { setCircleSize } = useContext(gameContext);
  const [loadGameDialog, setLoadGameDialog] = useState(false);

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
          <ListItemButton onClick={() => setLoadGameDialog(true)}>
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
            defaultValue={10}
            step={1}
            min={5}
            max={15}
            marks
          />
        </Box>
      </Dropdown>

      <LoadGameModal
        open={loadGameDialog}
        close={() => setLoadGameDialog(false)}
      />
    </>
  );
}
