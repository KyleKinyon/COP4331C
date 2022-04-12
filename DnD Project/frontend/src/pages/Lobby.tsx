import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersistentDialog from "../components/General/PersistentDialog";
import Navbar from "../components/Navbar";
import { Character } from "../utils/interfaces";
import req from "../utils/request";

interface User {
  username: string;
  character: string;
  isDM: boolean;
}

interface LobbyProps {
  show?: boolean;
}

export default function Lobby({ show }: LobbyProps) {
  const navigate = useNavigate();
  const param = useParams();

  const [users, setUsers] = useState<User[]>([]);
  const [character, setCharacter] = useState("");
  const [charList, setCharList] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      const {
        data: { characters },
      } = await req.get("/char/selectCharacter");

      setCharList(characters);
    })();
  }, []);

  return (
    <>
      <Box
        sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar back />

        <Grid container spacing={1}>
          <Box>
            <Box
              my={2}
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/dnd_logo.png"
                alt="DnD Logo"
                loading="lazy"
                style={{
                  width: "65%",
                  height: "auto",
                }}
              />
            </Box>

            <Typography
              variant="h5"
              textAlign="center"
            >{`${users.length} Players`}</Typography>
          </Box>
          <Box display="flex" width={1}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={character}
              onChange={(e) => {
                setCharacter(e.target.value);
              }}
              label="Age"
            >
              {charList.map((item, i) => (
                <MenuItem value={item.charName} key={i}>
                  {item.charName}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>

        <Box my={2} p={3}>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => navigate("/dmLobby")}
            fullWidth
          >
            Proceed
          </Button>
        </Box>
      </Box>

      {show && <PersistentDialog url="/lobby" show />}
    </>
  );
}
