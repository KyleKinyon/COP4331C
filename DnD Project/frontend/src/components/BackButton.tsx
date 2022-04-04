import { useNavigate} from "react-router-dom";
import {  Button} from "@mui/material";

export default function BackButton() {
  let navigate = useNavigate();

  return (
     <Button
          onClick={() => {
            navigate(-1);
          }}
           variant="contained"
          color="inherit"
        >
        Go Back
        </Button>
    
  );
}
