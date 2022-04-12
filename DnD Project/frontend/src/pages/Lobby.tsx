import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersistentDialog from "../components/General/PersistentDialog";
import Navbar from "../components/Navbar";
import { Character } from "../utils/interfaces";
import req from "../utils/request";
import io, { Socket } from "socket.io-client";

interface User {
  username: string;
  character: string | null;
  isDM: boolean;
}

interface LobbyProps {
  show?: boolean;
}

export default function Lobby({ show }: LobbyProps) {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://cop4331-dnd.herokuapp.com/`
      : `http://${process.env.REACT_APP_BACKEND_ADDRESS}:8080`;

  const navigate = useNavigate();
  const room = useParams();

  const socket = useRef<Socket | null>(null);
  const [self, setSelf] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [character, setCharacter] = useState("");
  const [charList, setCharList] = useState<Character[]>([]);

  useEffect(() => {
    console.log(localStorage.getItem("username"));
    setSelf({
      username: localStorage.getItem("username")!,
      character: null,
      isDM: false,
    });

    req.get("/char/selectCharacter").then(({ data }) => {
      const { characters } = data;
      setCharList(characters);
    });
  }, []);

  useEffect(() => {
    try {
      if (socket.current === null) {
        socket.current = io(baseURL);
        socket.current?.emit("join", room, self?.username);
      }

      // socket.current?.on("connection", () => {
      //   socket.current?.emit("join", room, self?.username);
      // });

      socket.current?.on("newUser", (username: User) => {
        setUsers([...users, username]);
      });
    } catch (error) {
      console.log("pain");
    }

    // return () => {
    //   socket.current?.disconnect();
    // };
  }, [room, baseURL, users, self]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Box
        sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar back />

        <Box height={1} width={1}>
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
          <Box
            my={2}
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Character
              </InputLabel>
              <Select
                id="user-char-select"
                value={character}
                onChange={(e) => {
                  setCharacter(e.target.value);
                }}
                labelId="user-char-label"
                label="Character"
                size="medium"
              >
                {charList.map((item, i) => (
                  <MenuItem value={item.charName} key={i}>
                    {item.charName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* {users.map((item, i) => {

						})} */}
          </Box>

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
      </Box>

      {show && <PersistentDialog url="/lobby" show />}
    </>
  );
}
