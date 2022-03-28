import { Box, CardContent, Grid, Typography } from "@mui/material";

interface ChooseRaceProps {
  updateRace: any;
}

const races = [
  { name: "dwarf", src: "/images/dwarf.jpg" },
  { name: "elf", src: "/images/elf.jpg" },
  { name: "gnome", src: "/images/gnome.jpg" },
  { name: "human", src: "/images/human.jpg" },
  { name: "halfling", src: "/images/halfling.jpg" },
  { name: "dragonborn", src: "/images/dragonborn.jpg" },
  { name: "half-elf", src: "/images/halfelf.jpg" },
  { name: "half-orc", src: "/images/halforc.jpg" },
  { name: "tiefling", src: "/images/tiefling.jpg" },
];

export default function ChooseRace({ updateRace }: ChooseRaceProps) {
  return (
    <Box sx={{ width: 1, textAlign: "center" }}>
      <Typography variant="h5" component="h2">
        SELECT A RACE
      </Typography>

      <Grid container spacing={5} columns={24} sx={{ cursor: "pointer" }}>
        {races.map((item, i) => (
          <Grid
            item
            xs={8}
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
            id={item.name}
            onClick={() => updateRace(item.name)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              p={2}
            >
              <CardContent
                component="img"
                height="125"
                width="125"
                src={item.src}
                title={item.name}
              />
            </Box>

            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ textTransform: "uppercase", textAlign: "center" }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
