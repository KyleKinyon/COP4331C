import {
  Box,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { gameContext } from "./GameContext";
import { CharList } from "../../utils/interfaces";
import Dropdown from "../General/Dropdown";

export default function CharacterDropdown() {
  const { characters, addCharacter, chosenChar, setChosenChar } =
    useContext(gameContext);

  const [showDialog, setShowDialog] = useState(false);
  const [charInfo, setCharInfo] = useState({
    name: "",
    color: "",
  });

  useEffect(() => {
    if (showDialog)
      setCharInfo({
        name: "",
        color: "",
      });
  }, [showDialog]);

  return (
    <>
      <Dropdown title="Character">
        {characters.map((item: CharList, i: number) => (
          <ListItem
            key={i}
            onClick={() => {
              setChosenChar(item);
            }}
            sx={{
              cursor: "pointer",
            }}
            divider
          >
            <ListItemButton>
              <ListItemText
                primary={item.name}
                sx={{
                  borderBottom: chosenChar === item ? "1px #B76861 solid" : "",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          onClick={() => {
            setShowDialog(true);
          }}
          sx={{ cursor: "pointer" }}
          divider
        >
          <ListItemButton>
            <ListItemText primary="Add a Character" />
          </ListItemButton>
        </ListItem>
      </Dropdown>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onBackdropClick={() => setShowDialog(true)}
        keepMounted
        disableEscapeKeyDown
        fullWidth
      >
        <DialogTitle>New Character</DialogTitle>
        <DialogContent>
          <Box
            my={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              width: 1,
            }}
          >
            <TextField
              id="room"
              label="New Character"
              value={charInfo.name}
              onChange={(e) =>
                setCharInfo({ ...charInfo, name: e.target.value })
              }
            />

            <Box py={1} my={1}>
              <Grid container columns={2} sx={{ width: 1, height: 1 }}>
                <Grid item xs={1}>
                  <TextField
                    id="room"
                    label="Color"
                    value={charInfo.color}
                    onChange={(e) =>
                      setCharInfo({ ...charInfo, color: e.target.value })
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    border: "1px black solid",
                    backgroundColor: `#${charInfo.color}`,
                  }}
                />
              </Grid>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => {
              addCharacter({
                ...charInfo,
                x: 0,
                y: 0,
              });
              setShowDialog(false);
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
