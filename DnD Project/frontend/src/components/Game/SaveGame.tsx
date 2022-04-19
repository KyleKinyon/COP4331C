import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { gameContext } from "./GameContext";
// import { useLocation } from "react-router-dom";

// TODO: Save existing or create a new one

export default function SaveGame() {
  const { saveGame } = useContext(gameContext);
  // const location = useLocation();
  const [showDialog, setShowDialog] = useState(false);
  const [sessionName, setSessionName] = useState("");

  return (
    <>
      <Box px={1}>
        <Button
          variant="contained"
          fullWidth
          onClick={async (e) => {
            e.preventDefault();
            setShowDialog(true);
          }}
        >
          Save
        </Button>
      </Box>
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onBackdropClick={() => setShowDialog(true)}
        keepMounted
        disableEscapeKeyDown
        fullWidth
      >
        <DialogTitle>Save Session</DialogTitle>
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
              label="Session Name"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
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
              saveGame(sessionName, true)
                ? setShowDialog(false)
                : console.log("Pain");
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
