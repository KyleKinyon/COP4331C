import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PersistDialogProps {
  show?: boolean;
  url: String;
}

export default function PersistentDialog({ show, url }: PersistDialogProps) {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(show ?? false);
  const [room, setRoom] = useState("");

  const handleRedirect = async () => {
    if (room.trim() === "") {
      return;
    }

    navigate(`${url}/${room}`);
  };

  useEffect(() => {
    setShowDialog(true);
  }, [showDialog]);

  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      onBackdropClick={() => setShowDialog(true)}
      keepMounted
      disableEscapeKeyDown
      fullWidth
    >
      <DialogTitle>Room name required</DialogTitle>
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
            label="Room Name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          onClick={handleRedirect}
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
}
