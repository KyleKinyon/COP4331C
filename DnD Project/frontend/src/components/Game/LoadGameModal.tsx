import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
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
  const { loadGame, newGame, deleteGame } = useContext(gameContext);
  const [games, setGames] = useState<Game[]>([]);

  const removeGameFromList = (item: Game) => {
    setGames(games.filter((iter) => item !== iter));
  };

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
  }, [open]);

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Load Game</DialogTitle>
      <DialogContent>
        {games.length > 0 && (
          <List>
            {games.map((item, i) => (
              <ListItem
                key={i}
                divider
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      deleteGame(item);
                      removeGameFromList(item);
                    }}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemButton
                  onClick={() => {
                    loadGame(item);
                    close();
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`Map: ${item.map.name}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem divider>
              <ListItemButton
                onClick={() => {
                  newGame();
                  close();
                }}
              >
                <ListItemText primary="Create a new game" />
              </ListItemButton>
            </ListItem>
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
