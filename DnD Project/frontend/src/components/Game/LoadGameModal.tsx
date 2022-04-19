import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { gameContext } from "./GameContext";
import { useContext, useEffect, useState } from "react";
import { Game } from "../../utils/interfaces";
import { ListItemText } from "@material-ui/core";
import req from "../../utils/request";

interface LoadGameProps {
  open: boolean;
  close: () => void;
}

export default function LoadGame({ open, close }: LoadGameProps) {
  const { loadGame } = useContext(gameContext);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let {
          data: { sessions },
        } = await req.get("/session/listSessions");
        setGames(sessions);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Load Game</DialogTitle>
      <DialogContent>
        {games.length > 0 && (
          <List>
            {games.map((item, i) => (
              <ListItemButton
                key={i}
                onClick={() => {
                  loadGame(item?.id);
                }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={`Map: ${item.map.name}`}
                />
              </ListItemButton>
            ))}
          </List>
        )}

        {games.length === 0 && (
          <>
            <Typography variant="body1">
              Looks like you need create a game!
            </Typography>
            <Typography variant="subtitle1">
              Just continue using the current game and hit save when you are
              ready!
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={close}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
