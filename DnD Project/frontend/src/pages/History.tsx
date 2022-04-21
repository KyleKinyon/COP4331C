import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Dropdown from "../components/General/Dropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Game } from "../utils/interfaces";
import req from "../utils/request";

export default function History() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const {
        data: { sessions },
      } = await req.get("/session/listSessions");
      setGames(sessions);
      console.log(sessions);
    })();
  }, []);

  return (
    <Box width={1} height={1} display="flex" flexDirection="column">
      <Navbar />
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        sx={{
          width: 1,
          height: 1,
        }}
      >
        <Typography variant="h4" py={1} px={2} textAlign="center">
          History
        </Typography>

        <Box
          sx={{
            height: 1,
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box p={2} my={2} sx={{ width: "clamp(350px, 60%, 90%)" }}>
            <List sx={{ backgroundColor: "white" }}>
              {games.map((item, i) => (
                <Dropdown
                  key={i}
                  title={item.name}
                  subtitle={item.map.name}
                  divider
                >
                  {item.logs.map((text, j) => (
                    <ListItem key={j}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </Dropdown>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
