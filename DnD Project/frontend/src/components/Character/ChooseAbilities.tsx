import { Box, TextField, Typography } from "@mui/material";
import { Abilities } from "../../utils/interfaces";

// good luck cleaning up this file

interface chooseAbilitiesProps {
  absObj: Abilities;
  updateAbsObj: any;
}

export default function ChooseAbilities({
  absObj,
  updateAbsObj,
}: chooseAbilitiesProps) {
  const handleInputChange = (e: any) => {
    const { id: name, value } = e.target;

    if (/[a-z]/i.test(value)) return;

    updateAbsObj({
      ...absObj,
      [name]: value === "" ? 0 : parseInt(value),
    });
  };

  return (
    <>
      <Box p={2}>
        <Typography variant="h4" component="h2" textAlign="center" mb={2}>
          ENTER YOUR SKILLS
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              flexDirection: "column",
            }}
            py={1}
          >
            <Typography variant="h5">Dexterity</Typography>
            <Box my={1}>
              <TextField
                fullWidth
                id="acrobatics"
                label="Acrobatics"
                variant="standard"
                value={absObj.acrobatics}
                onChange={handleInputChange}
              />
            </Box>

            <Box my={1}>
              <TextField
                fullWidth
                id="sleightOfHand"
                label="Sleight of Hand"
                variant="standard"
                value={absObj.sleightOfHand}
                onChange={handleInputChange}
              />
            </Box>

            <Box my={1}>
              <TextField
                fullWidth
                id="stealth"
                label="Stealth"
                variant="standard"
                value={absObj.stealth}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
          <hr />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              flexDirection: "column",
            }}
            py={1}
          >
            <Typography variant="h5">Wisdom</Typography>
            <Box mb={1}>
              <TextField
                fullWidth
                id="animalHealing"
                label="Animal Healing"
                variant="standard"
                value={absObj.animalHealing}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="insight"
                label="Insight"
                variant="standard"
                value={0}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="medicine"
                label="Medicine"
                variant="standard"
                value={absObj.medicine}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="survival"
                label="Survival"
                variant="standard"
                value={absObj.survival}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="perception"
                label="Perception"
                variant="standard"
                value={absObj.perception}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
          <hr />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              flexDirection: "column",
            }}
            py={1}
          >
            <Typography variant="h5">Intelligence</Typography>
            <Box mb={1}>
              <TextField
                fullWidth
                id="arcana"
                label="Arcana"
                variant="standard"
                value={absObj.arcana}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="history"
                label="History"
                variant="standard"
                value={absObj.history}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="investigation"
                label="Investigation"
                variant="standard"
                value={absObj.investigation}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="nature"
                label="Nature"
                variant="standard"
                value={absObj.nature}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
          <hr />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              flexDirection: "column",
            }}
            py={1}
          >
            <Typography variant="h5">Charisma</Typography>
            <Box mb={1}>
              <TextField
                fullWidth
                id="deception"
                label="Deception"
                variant="standard"
                value={absObj.deception}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="intimidation"
                label="Intimidation"
                variant="standard"
                value={absObj.intimidation}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="performance"
                label="Performance"
                variant="standard"
                value={absObj.performance}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={1}>
              <TextField
                fullWidth
                id="persuasion"
                label="Persuasion"
                variant="standard"
                value={absObj.persuasion}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
          <hr />

          <Box>
            <Typography variant="h5">Strength</Typography>
            <TextField
              fullWidth
              id="athletics"
              label="Athletics"
              variant="standard"
              value={absObj.athletics}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
