import { useNavigate} from "react-router-dom";
import {  Button} from "@mui/material";

export default function StartCampaign() {
  let navigate = useNavigate();

  return (
     <Button
          onClick={() => {
            navigate("/lobby");
          }}
           variant="contained"
          color="inherit"
        >
        Start Campaign
        </Button>
    
  );
}
