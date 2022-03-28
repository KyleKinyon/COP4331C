import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ChooseClass from "../components/Character/ChooseClass";
import ChooseRace from "../components/Character/ChooseRace";
import ChooseStats from "../components/Character/ChooseStats";
import TabPanel from "../components/General/TabPanel";

// TODO: Pull data from backend
// TODO: Make reusable for edit/create/view
// TODO: Update this to be tabs where you update each section 🤔

export default function Character() {
  const [page, setPage] = useState(0);

  const [name, setName] = useState("");
  const [charClass, setCharClass] = useState("");
  const [race, setRace] = useState("");
  const [stats, setStats] = useState({
    strength: 0,
    constitution: 0,
    dexterity: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });

  useEffect(() => {
    console.log("race change");
    console.log(race);
  }, [race]);
  useEffect(() => {
    console.log("class change");
    console.log(charClass);
  }, [charClass]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  const save = async () => {
    console.log("Saving to db");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
        <Navbar />
        <Tabs value={page} onChange={handleChange} centered>
          <Tab label="Name" />
          <Tab label="Class" />
          <Tab label="Race" />
          <Tab label="Stats" />
        </Tabs>

        <TabPanel value={0} index={page}>
          <Box
            position="static"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
            p={4}
          >
            <Typography variant="h5" component="h2">
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
          <ChooseClass update={setCharClass} />
        </TabPanel>
        <TabPanel value={2} index={page}>
          <ChooseRace updateRace={setRace} />
        </TabPanel>
        <TabPanel value={3} index={page}>
          <ChooseStats statsObj={stats} updateStatsObj={setStats} />
        </TabPanel>

        {/* <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Typography variant="h5" component="h2">
            ENTER YOUR SKILLS
          </Typography>
        </Box>

        <Grid container spacing={6} columns={8}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Acrobatics"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>ACROBATICS (DEX)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Animal Healing"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>ANIMAL HEALING (WIS)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Arcana"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>ARCANA (INT)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Athletics"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>ATHLETICS (STR)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Deception"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>DECEPTION (CHA)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="History"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>HISTORY (INT)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Insight"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>INSIGHT (WIS)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Intimidation"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>INTIMIDATION (CHA)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Investigation"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>INVESTIGATION (INT)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Medicine"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>MEDICINE (WIS)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Nature"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>NATURE (INT)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Perception"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>PERCEPTION (WIS)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Performance"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>PERFORMANCE (CHA)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Persuassion"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>PERSUASSION (CHA)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Sleight of Hand"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>SLEIGHT OF HAND (DEX)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Stealth"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>STEALTH (DEX)</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Survival"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>SURVIVAL (WIS)</p>
            </Box>
          </Grid>
        </Grid>

        <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Button onClick={save} variant="contained">
            SAVE
          </Button>
        </Box> */}
      </Box>
    </>
  );
}
