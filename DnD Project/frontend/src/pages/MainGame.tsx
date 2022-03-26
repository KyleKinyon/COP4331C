import * as React from "react";
import { Box, Button, CardMedia, TextField, Paper, List, ListItem,ListItemText } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import LobbyBar from "../components/LobbyBar";
import { experimentalStyled as styled } from "@mui/material/styles";
import Image from "material-ui-image";
import { Stars, Circle } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Image src={"images/dnd_map.png"} />
      </Grid>

      <Grid
        container
        item
        xs={4}
        justifyContent="flex-end"
        alignItems="flex-end"
        direction="column"
      >
        <Button variant="contained" startIcon={<Stars />}>
          P1
        </Button>
        <Button variant="contained" startIcon={<Circle />}>
          P2
        </Button>
        <Button variant="contained" startIcon={<Circle />}>
          P3
        </Button>
        <Button variant="contained" startIcon={<Circle />}>
          P4
        </Button>
        <Button variant="contained" startIcon={<Circle />}>
          P5
        </Button>
        <Button variant="contained" startIcon={<Circle />}>
          P6
        </Button>
      </Grid>
    </React.Fragment>
  );
}

function FormColumn4() {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Button variant="contained">Player List</Button>
          <Button variant="contained">Inventory</Button>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Button variant="contained">Character Sheets</Button>
          <Button variant="contained">NPC Sheets</Button>
        </Grid>
        <Grid container item xs={4} alignItems="flex-end">
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#D3D3D3",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {" "}
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  {[0, 1, 2].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default function MainGame() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
        <LobbyBar />

        {/* ADD CARD MEDIA LATER */}

        <Box
          position="static"
          display="flex"
          width={1300}
          alignItems="left"
          justifyContent="left"
          left={0}
          sx={{ mx: "auto", width: 700 }}
        ></Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid container item spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item spacing={1}>
              <FormColumn4 />
            </Grid>

            <Grid container justify="center" spacing={1}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                onClick={() => {
                  alert("Placeholder for Proceed function");
                }}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
