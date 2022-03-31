import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Character } from "../utils/interfaces";
import { Add, Delete } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import req from "../utils/request";

export default function ListCharacters() {
  const navigate = useNavigate();
  const [chars, setChars] = useState<Character[]>([]);

  const getCharData = async () => {
    try {
      const {
        data: { characters },
      } = await req.get("/char/selectCharacter");

      setChars(characters);
    } catch (error) {
      console.log("Issue getting character data");
      console.error(error);
    }
  };

  const deleteChar = async (id: string) => {
    try {
      await req.post("/char/deleteCharacter", { charId: id });
      await getCharData();
    } catch (error) {
      console.log("Issue with deleting character");
      console.error(error);
    }
  };

  useEffect(() => {
    getCharData();
  }, []);

  return (
    <>
      <Box sx={{ width: 1, height: 1 }}>
        <Navbar />

        <Box p={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Character Created:
          </Typography>
          <List>
            {chars.map((item, i) => (
              <ListItem
                key={i}
                sx={{ cursor: "pointer" }}
                divider
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteChar(item._id)}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={item.charName}
                  secondary={item.race}
                  onClick={() => navigate(`/character/${item._id}`)}
                />
              </ListItem>
            ))}
            <ListItem
              onClick={() => navigate("/character/create")}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add a new character" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
