// import { Link } from "@mui/material";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Grid,
    IconButton,
    TextField,
    CardContent,
  } from "@mui/material";

  
export default function Character() {
    return (
      <>
        <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                D&D 25
              </Typography>
              <Button
                onClick={() => {
                  alert("Placeholder for log out function");
                }}
                color="inherit"
              >
                Log Out
              </Button>
            </Toolbar>
          </AppBar>
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
        <TextField id="standard-basic" fullWidth label="fullWidth"  label="Enter Character Name" variant="standard"  
          inputProps={{min: 0, style: { textAlign: 'center' }}}
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

      <Grid container spacing={5} columns={32} alignItems="center" justify="center">
        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
           <p>WIZARD</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
            <p>WARLOCK</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
            <p>SORCERER</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6.5 }} >
            <p>CLERIC</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5.5 }} >
            <p>FIGHTER</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 4 }} >
            <p>BARBARIAN</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6.5 }} >
            <p>MONK</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6.5 }} >
            <p>ROUGE</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5.5 }} >
            <p>RANGER</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
            <p>ARTIFICER</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6.5 }} >
            <p>DRUID</p>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 7 }} >
            <p>BARD</p>
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
            SELECT A RACE
        </Typography>
      </Box>


      <Grid container spacing={5} columns={24} alignItems="center" justify="center">
        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6 }} >
           <p>DWARF</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 8 }} >
            <p>ELF</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6 }} >
            <p>GNOME</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 6.5 }} >
            <p>HUMAN</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
            <p>HALFLING</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 3}} >
            <p>DRAGONBORN</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5.5 }} >
            <p>HALF-ELF</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5 }} >
            <p>HALF-ORC</p>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <CardContent
            onClick={() => {
              alert("Placeholder for Select Character function");
            }}
            component="img"
            height="125"
            width="125"
            src={require("../media/character_img1.jpg")}
            title="character1"
          />
          <Box sx={{ ml: 5.5 }} >
            <p>TIEFLING</p>
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
            ENTER YOUR STATS
        </Typography>
      </Box>

      <Grid container spacing={6} columns={24} alignItems="center" justify="center">
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Strength" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>STRENGTH</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Constitution" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>CONSTITUTION</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Dexterity" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>DEXTERITY</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Wisdom" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>WISDOM</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Intelligence" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>INTELLIGENCE</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Charisma" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
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


      <Grid container spacing={6} columns={8} alignItems="center" justify="center">
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Acrobatics" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>ACROBATICS (DEX)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Animal Healing" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>ANIMAL HEALING (WIS)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Arcana" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>ARCANA (INT)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Athletics" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>ATHLETICS (STR)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Deception" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>DECEPTION (CHA)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="History" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>HISTORY (INT)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Insight" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>INSIGHT (WIS)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Intimidation" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>INTIMIDATION (CHA)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Investigation" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>INVESTIGATION (INT)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Medicine" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>MEDICINE (WIS)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Nature" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>NATURE (INT)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Perception" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>PERCEPTION (WIS)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Performance" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>PERFORMANCE (CHA)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Persuassion" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>PERSUASSION (CHA)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Sleight of Hand" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>SLEIGHT OF HAND (DEX)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Stealth" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
           <p>STEALTH (DEX)</p>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <TextField id="standard-basic" label="fullWidth"  label="Survival" variant="standard"  
            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          <Box sx={{ ml: 1 }} >
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


    </>
  );
}
