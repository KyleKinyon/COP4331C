import { TextField } from "@mui/material";

interface NumberFieldProps {
  value: Number | String;
  callback: (...args: any[]) => void;
}

export default function NumberField({ callback, value }: NumberFieldProps) {
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      onChange={(e) => {
        let num = e.target.value;
        if (num.trim() === "") {
          callback("");
        } else if (!isNaN(parseInt(num))) {
          callback(parseInt(num));
        }
      }}
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
