import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { gameContext } from "./GameContext";

export default function RollDice() {
  const { addLog, chosenChar } = useContext(gameContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [diceInfo, setDiceInfo] = useState({
    value: 0,
    min: 1,
    max: 10,
  });

  const randomNumber = (min: number, max: number) => {
    function loop(i: number) {
      setTimeout(() => {
        let value = Math.floor(Math.random() * (max+1 - min) + min);
        setDiceInfo({ ...diceInfo, value });

        if (--i) {
          loop(i);
        } else {
          addLog(
            `${chosenChar.name} has rolled a ${
              document.getElementById("num")?.innerHTML as string
            }`
          );
        }
      }, 100);
    }

    loop(8);
  };

  const handleInputChange = (e: any) => {
    const { id: name, value } = e.target;

    if (/[a-z]/i.test(value)) return;
    // if (diceInfo.min > diceInfo.max) return;
    // if (diceInfo.max < diceInfo.min) return;

    setDiceInfo({
      ...diceInfo,
      [name]: value === "" ? 0 : parseInt(value),
    });
  };

  useEffect(() => {
    setDiceInfo({
      value: 1,
      min: 1,
      max: 10,
    });
  }, [openDialog]);

  return (
    <>
      <List>
        <ListItemButton onClick={() => setOpenDialog(true)}>
          <ListItemText primary="Roll Dice" />
        </ListItemButton>
      </List>

      <Dialog open={openDialog}>
        <DialogTitle>Roll Dice</DialogTitle>
        <DialogContent>
          <Typography id="num" variant="h4" textAlign="center">
            {chosenChar !== null ? diceInfo.value : ""}
          </Typography>

          <Box
            width={1}
            height={1}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {chosenChar === null && (
              <Typography variant="body1">
                Please make a character before rolling
              </Typography>
            )}

            {chosenChar !== null && (
              <>
                <Box py={1} px={2}>
                  <TextField
                    id="min"
                    label="Min Number"
                    value={diceInfo.min}
                    onChange={handleInputChange}
                  />
                </Box>

                <Box py={1} px={2}>
                  <TextField
                    id="max"
                    label="Max Number"
                    value={diceInfo.max}
                    onChange={handleInputChange}
                  />
                </Box>
              </>
            )}
          </Box>
          {chosenChar !== null && (
            <Box px={2} my={1}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => randomNumber(diceInfo.min, diceInfo.max)}
              >
                Roll
              </Button>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
