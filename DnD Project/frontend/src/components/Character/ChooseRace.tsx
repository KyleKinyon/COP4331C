import { Box, CardContent, Grid, Typography } from "@mui/material";

const border = {
  cursor: "pointer",
  borderColor: "secondary.main",
  borderWidth: "2px",
  borderStyle: "dashed",
};

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

interface ChooseRaceProps {
  updateRace: any;
  selected: string;
}

export default function ChooseRace({ selected, updateRace }: ChooseRaceProps) {
  return (
    <>
      <Box position="static" sx={{ width: 1, textAlign: "center" }} my={4}>
        <Typography variant="h5" component="h2" my={2}>
          SELECT A CLASS
        </Typography>

        <Grid container columns={9}>
          {races.map((item, i) => (
            <Grid
              item
              xs={3}
              key={i}
              onClick={() => updateRace(item.name)}
              sx={
                selected.toLowerCase() !== item.name.toLowerCase()
                  ? {
                      cursor: "pointer",
                    }
                  : border
              }
            >
              <Box
                sx={{
                  width: 1,
                  height: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
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
                  sx={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
