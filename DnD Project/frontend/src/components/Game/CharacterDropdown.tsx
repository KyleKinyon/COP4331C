import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { gameContext } from "./GameContext";
import { CharList } from "../../utils/interfaces";

export default function CharacterDropdown() {
  const { characters, addCharacter, chosenChar, setChosenChar } =
    useContext(gameContext);
  const [showList, setShowList] = useState(false);

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
      <List sx={{}}>
        <ListItemButton onClick={() => setShowList(!showList)}>
          <ListItemText primary="Characters" />
          {showList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
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
                      borderBottom:
                        chosenChar === item ? "1px #B76861 solid" : "",
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
          </List>
        </Collapse>
      </List>

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

            <TextField
              id="room"
              label="Color"
              value={charInfo.color}
              onChange={(e) =>
                setCharInfo({ ...charInfo, color: e.target.value })
              }
            />
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
