import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function ForwardButton() {
  let navigate = useNavigate();

  return (
    <Button
      color="primary"
      size="large"
      type="submit"
      variant="contained"
      onClick={() => {
        navigate("/dmLobby");
      }}
    >
      Proceed
    </Button>
  );
}
