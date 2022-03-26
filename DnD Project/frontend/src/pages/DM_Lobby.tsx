import * as React from "react";
import { Box, Button, CardMedia, TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import LobbyBar from "../components/LobbyBar";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Image from "material-ui-image";

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
        <Item>Misc Task(s)</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Task #1</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Task #2</Item>
      </Grid>
    </React.Fragment>
  );
}

function FormRow2() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Campaign Name:</Item>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="standard-basic"
          label="~Campaign Name~"
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
}

function FormRow3() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Map:</Item>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" component="label" color="primary">
          {" "}
          Upload a file
          <input type="file" hidden />
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default function DM_Lobby() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
        <LobbyBar />
        <Grid container spacing={1}>
          {/* ADD CARD MEDIA LATER */}

          <Box
            position="static"
            display="flex"
            width={1300}
            alignItems="left"
            justifyContent="left"
            left={0}
            sx={{ mx: "auto", width: 700 }}
          >
            <Grid item xs={2}>
              <h1>DM Role</h1>
            </Grid>
          </Box>
          <Box
            position="static"
            display="flex"
            width={1300}
            alignItems="center"
            justifyContent="center"
            left={0}
            sx={{ mx: "auto", width: 700 }}
          >
            <Grid item xs={2}>
              <Image src={"images/dnd_logo.png"} />
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <FormRow2 />
              </Grid>
              <Grid container item spacing={3}>
                <FormRow3 />
              </Grid>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </Box>

          <Grid container justify="center">
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
    </>
  );
}
