import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

const classes = [
  "wizard",
  "warlock",
  "sorcerer",
  "cleric",
  "fighter",
  "barbarian",
  "monk",
  "rogue",
  "ranger",
  "artificer",
  "druid",
  "bard",
];
const races = [
  "dwarf",
  "elf",
  "gnome",
  "human",
  "halfling",
  "dragonborn",
  "half-elf",
  "half-orc",
  "tiefling",
];

export default function Character() {
  const [charClass, setCharClass] = useState("");
  const [race, setRace] = useState("");

  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
        <Navbar />
        <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Typography variant="h5" component="h2">
            CHARACTER NAME
          </Typography>
        </Box>
        <Box
          position="static"
          display="flex"
          width={1300}
          height={40}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <TextField
            id="standard-basic"
            label="Enter Character Name"
            variant="standard"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            fullWidth
          />
        </Box>
        <Box
          position="static"
          display="flex"
          width={1300}
          height={90}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: "auto", width: 700 }}
        >
          <Typography variant="h5" component="h2">
            SELECT A CLASS
          </Typography>
        </Box>

        <Grid container spacing={5} columns={32}>
          {classes.map((item, i) => (
            <Grid item xs={8} key={i}>
              <CardContent
                onClick={() => setCharClass(item)}
                component="img"
                height="125"
                width="125"
                src={require("../media/character_img1.jpg")}
                title="character1"
              />
              <Box sx={{ ml: 5, textTransform: "uppercase" }}>
                <p>{item}</p>
              </Box>
            </Grid>
          ))}
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
          <Typography variant="h5" component="h2">
            SELECT A RACE
          </Typography>
        </Box>

        <Grid container spacing={5} columns={24}>
          {races.map((item, i) => (
            <Grid item xs={8} key={i}>
              <CardContent
                onClick={() => setRace(item)}
                component="img"
                height="125"
                width="125"
                src={require("../media/character_img1.jpg")}
                title="character1"
              />
              <Box sx={{ ml: 5, textTransform: "uppercase" }}>
                <p>{item}</p>
              </Box>
            </Grid>
          ))}
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
          <Typography variant="h5" component="h2">
            ENTER YOUR STATS
          </Typography>
        </Box>

        <Grid container spacing={6} columns={24}>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Strength"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>STRENGTH</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Constitution"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>CONSTITUTION</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Dexterity"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>DEXTERITY</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Wisdom"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>WISDOM</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Intelligence"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>INTELLIGENCE</p>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="standard-basic"
              fullWidth
              label="Charisma"
              variant="standard"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
            />
            <Box sx={{ ml: 1 }}>
              <p>CHARISMA</p>
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
          <Button
            onClick={() => {
              alert("Placeholder for Save Character");
            }}
            variant="contained"
          >
            SAVE
          </Button>
        </Box>
      </Box>
    </>
  );
}
