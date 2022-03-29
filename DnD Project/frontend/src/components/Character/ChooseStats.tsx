import { Box, Typography, TextField, Grid } from "@mui/material";
import { Stats } from "../../utils/interfaces";

// TODO: Update so that stats can be randomized with a cap (feature)

interface chooseStatsProps {
  statsObj: Stats;
  updateStatsObj: any;
}

export default function ChooseStats({
  statsObj,
  updateStatsObj,
}: chooseStatsProps) {
  const handleInputChange = (e: any) => {
    const { id: name, value } = e.target;

    if (/[a-z]/i.test(value)) return;

    updateStatsObj({
      ...statsObj,
      [name]: value === "" ? 0 : parseInt(value),
    });
  };

  return (
    <>
      <Box p={3}>
        <Typography
          variant="h5"
          component="h2"
          my={2}
          sx={{ textAlign: "center" }}
        >
          ENTER YOUR STATS
        </Typography>

        <Grid container spacing={6} columns={24}>
          <Grid item xs={8}>
            <TextField
              id="strength"
              fullWidth
              label="Strength"
              variant="standard"
              value={statsObj.strength}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="constitution"
              fullWidth
              label="Constitution"
              variant="standard"
              value={statsObj.constitution}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="dexterity"
              fullWidth
              label="Dexterity"
              variant="standard"
              value={statsObj.dexterity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="wisdom"
              fullWidth
              label="Wisdom"
              variant="standard"
              value={statsObj.wisdom}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="intelligence"
              fullWidth
              label="Intelligence"
              variant="standard"
              value={statsObj.intelligence}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="charisma"
              fullWidth
              label="Charisma"
              variant="standard"
              value={statsObj.charisma}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
