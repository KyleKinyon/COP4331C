import { Box, CardContent, Grid, Typography } from "@mui/material";

// TODO: Turn grid items to card with image cover and class info

interface ClassProps {
  update: any;
}

const classes = [
  { name: "wizard", src: "/images/wizard.jpg" },
  { name: "sorcerer", src: "/images/sorcerer.jpg" },
  { name: "warlock", src: "/images/warlock.jpg" },
  { name: "cleric", src: "/images/cleric.jpg" },
  { name: "fighter", src: "/images/fighter.jpg" },
  { name: "barbarian", src: "/images/barbarian.jpg" },
  { name: "monk", src: "/images/monk.jpg" },
  { name: "rogue", src: "/images/rouge.jpg" },
  { name: "ranger", src: "/images/ranger.jpg" },
  { name: "artificer", src: "/images/artificer.jpg" },
  { name: "druid", src: "/images/druid.jpg" },
  { name: "bard", src: "/images/bard.jpg" },
];

export default function ChooseClass({ update }: ClassProps) {
  return (
    <Box position="static" sx={{ width: 1, textAlign: "center" }} my={4}>
      <Typography variant="h5" component="h2" my={2}>
        SELECT A CLASS
      </Typography>

      <Grid container columns={32}>
        {classes.map((item, i) => (
          <Grid
            item
            xs={8}
            key={i}
            onClick={() => update(item.name)}
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
  );
}
