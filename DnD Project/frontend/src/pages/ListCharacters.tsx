import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import req from "../utils/request";

// TODO: Figure out memory leak error with this page

interface Character {
  _id: string;
  charName: string;
  race: string;
  level: number;

  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  equipment: string[];
}

export default function ListCharacters() {
  const [chars, setChars] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { characters },
        } = await req.get("/char/selectCharacter");

        setChars(characters);
      } catch (error) {
        console.log("Issue getting character data");
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Box sx={{ width: 1, height: 1 }}>
        <Navbar />

        <Box p={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Hello World
          </Typography>
          <List>
            {chars.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={item.charName} secondary={item.race} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
