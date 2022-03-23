import { Box, CardContent, Grid, Typography } from "@mui/material";

interface ClassProps {
  charClass?: string;
  update?: (str: string) => void;
}

// TODO: Update this variable to have the link and name
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

export default function ChooseClass({ charClass, update }: ClassProps) {
  return (
    <Grid container columns={32}>
      {classes.map((item, i) => (
        <Grid
          item
          xs={8}
          key={i}
          onClick={() => console.log(item)}
          sx={{ cursor: "pointer" }}
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
                src={"/images/human.jpg"}
                title="character1"
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "uppercase", textAlign: "center" }}
            >
              <p>{item}</p>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
