import { CircularProgress, Dialog } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Dialog open={true} fullScreen>
      <CircularProgress />
    </Dialog>
  );
}
