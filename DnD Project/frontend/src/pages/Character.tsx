import { Box, Typography, Button, TextField, Tabs, Tab } from "@mui/material";
import TabPanel from "../components/General/TabPanel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ChooseClass from "../components/Character/ChooseClass";
import ChooseRace from "../components/Character/ChooseRace";
import ChooseStats from "../components/Character/ChooseStats";
import req from "../utils/request";
import { Stats } from "../utils/interfaces";

// TODO: Have race and class show what is currently selected

interface CharacterPageProps {
  load?: boolean;
}

export default function Character({ load }: CharacterPageProps) {
  const navigate = useNavigate();
  const params = useParams();

  const [page, setPage] = useState(0);

  const [name, setName] = useState("");
  // const [level, setLevel] = useState(1);
  const [charClass, setCharClass] = useState("");
  const [race, setRace] = useState("");
  const [stats, setStats] = useState<Stats>({
    strength: 0,
    constitution: 0,
    dexterity: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });

  useEffect(() => {
    if (!load) return;

    (async () => {
      try {
        let {
          data: { character },
        } = await req.get("/char/selectCharacter", {
          params: { charId: params.charId },
        });

        setName(character.charName);
        setRace(character.race);
        setCharClass(character.class);

        setStats({
          constitution: character.constitution,
          wisdom: character.wisdom,
          dexterity: character.dexterity,
          strength: character.strength,
          intelligence: character.intelligence,
          charisma: character.charisma,
        });
      } catch (error) {
        // TODO: Show error if bad load
        navigate("/character");
      }
    })();
  }, [load, navigate, params.charId]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setPage(newValue);

  const save = async () => {
    try {
      let route = load ? "/char/editCharacter" : "/char/createCharacter";
      let body = load
        ? {
            charName: name,
            charClass,
            race,
            ...stats,
            charId: params.charId,
          }
        : {
            charName: name,
            charClass,
            race,
            ...stats,
          };

      await req.post(route, body);
      navigate("/character");
    } catch (error) {
      // TODO: Make a dialog that says if there's an error
      console.log("An error has occurred");
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <Tabs value={page} onChange={handleChange} centered>
          <Tab label="Name" />
          <Tab label="Class" />
          <Tab label="Race" />
          <Tab label="Stats" />
          <Tab label="Save" />
        </Tabs>

        <TabPanel value={0} index={page}>
          {/* TODO: Allow for setting levels */}
          <Box
            position="static"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
            p={4}
          >
            <Typography variant="h5" component="h2" textAlign="center">
              CHARACTER NAME
            </Typography>

            <TextField
              id="standard-basic"
              label="Enter Character Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
        </TabPanel>

        <TabPanel value={1} index={page}>
          <ChooseClass selected={charClass} update={setCharClass} />
        </TabPanel>
        <TabPanel value={2} index={page}>
          <ChooseRace selected={race} updateRace={setRace} />
        </TabPanel>
        <TabPanel value={3} index={page}>
          <ChooseStats statsObj={stats} updateStatsObj={setStats} />
        </TabPanel>

        <TabPanel value={4} index={page}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
          >
            <Typography variant="h5" textAlign="center" mb={1}>
              Ready to save?
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignContent="center"
            >
              <Button
                onClick={save}
                variant="contained"
                size="medium"
                sx={{ width: "30%" }}
              >
                SAVE
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}
