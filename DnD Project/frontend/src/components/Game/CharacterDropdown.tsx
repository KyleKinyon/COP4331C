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
  SvgIcon,
} from "@mui/material";
import {} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { gameContext } from "./GameContext";
import { CharList } from "../../utils/interfaces";
import Dropdown from "../General/Dropdown";

export default function CharacterDropdown() {
  const {
    characters,
    addCharacter,
    chosenChar,
    setChosenChar,
    removeCharacter,
  } = useContext(gameContext);

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

        <ListItem
          onClick={() => {
            removeCharacter();
          }}
          sx={{ cursor: "pointer" }}
          divider
        >
          <ListItemButton>
            <ListItemText primary="Delete Character" />
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
                    InputProps={{
                      startAdornment: (
                        <SvgIcon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        </SvgIcon>
                      ),
                    }}
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
                x: 10,
                y: 10,
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
