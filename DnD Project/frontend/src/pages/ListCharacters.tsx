import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Character } from "../utils/interfaces";
import Navbar from "../components/Navbar";
import req from "../utils/request";

export default function ListCharacters() {
  const navigate = useNavigate();
  const [chars, setChars] = useState<Character[]>([]);

  useEffect(() => {
    const getCharData = async () => {
      try {
        const {
          data: { characters },
        } = await req.get("/char/selectCharacter");

        return characters;
      } catch (error) {
        console.log("Issue getting character data");
        console.error(error);
      }
    };

    getCharData().then((data) => {
      // console.log(data);
      setChars(data);
    });
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
                onClick={() => navigate(`/character/${item._id}`)}
                sx={{ cursor: "pointer" }}
                divider
              >
                <ListItemText primary={item.charName} secondary={item.race} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
