import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface RngStatsProps {
  value: number;
  update: any;
  randomize: () => void;
}

export default function RandomizeStats({
  value,
  update,
  randomize,
}: RngStatsProps) {
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: any) => {
    const { value: num } = e.target;

    if (/[a-z]/i.test(num)) return;
    update(num);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Randomize
      </Button>
      <Dialog open={open}>
        <DialogTitle>Click to randomize your stats.</DialogTitle>
        <DialogContent>
          <TextField
            id="points"
            label="Points"
            variant="standard"
            value={value}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => randomize()}>
            Randomize
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
