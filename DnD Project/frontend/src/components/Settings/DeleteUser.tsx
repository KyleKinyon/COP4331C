import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import req from "../../utils/request";

export default function DeleteUser() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const deleteUser = async () => {
    req
      .delete("/user/delete")
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        console.log("There was an error with deleting user");
      });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Delete User
      </Button>

      <Dialog open={open}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <Typography variant="h5" mb={2}>
            Deleting your account cannot be undone.
          </Typography>

          <Box mt={3} width={1}>
            <Button variant="contained" fullWidth onClick={() => deleteUser()}>
              Delete
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
