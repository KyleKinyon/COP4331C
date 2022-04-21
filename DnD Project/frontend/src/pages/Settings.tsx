import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import req from "../utils/request";

//import ChangeUserModal from "../components/Settings/ChangeUserModal";
import ChangePassModal from "../components/Settings/ChangePassModal";
import ChangeFirstNameModal from "../components/Settings/ChangeFirstNameModal";
import ChangeLastNameModal from "../components/Settings/ChangeLastNameModal";
import { modalContext } from "../components/Settings/ModalContext";
import DeleteUser from "../components/Settings/DeleteUser";

export default function Settings() {
  const { username, firstName, lastName, setUsername, setFirst, setLast } =
    useContext(modalContext);

  const getData = async () => {
    try {
      const {
        data: { data },
      } = await req.get("/user/getUser");

      setUsername(data.username);
      setFirst(data.firstName);
      setLast(data.lastName);
      //setPassword(data.password);

      // console.log("The userID was " + data.username);
      // console.log("The password was " + data.password);
      // console.log("The first name was " + data.firstName);
      // console.log("The last name was " + data.lastName);
    } catch (error) {
      console.log("Issue getting username data");
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box sx={{ width: 1, height: 1 }}>
        <Navbar />

        <Box p={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Account Settings
          </Typography>
          <List>
            <ListItem
              sx={{ cursor: "pointer" }}
              divider
            >
              <ListItemText primary={"Username"} secondary={username} />
            </ListItem>
            <ListItem
              sx={{ cursor: "pointer" }}
              secondaryAction={<ChangePassModal />}
              divider
            >
              <ListItemText primary={"Password"} secondary={"*********"} />
            </ListItem>

            <ListItem
              sx={{ cursor: "pointer" }}
              divider
              secondaryAction={<ChangeFirstNameModal />}
            >
              <ListItemText primary={"First Name"} secondary={firstName} />
            </ListItem>

            <ListItem
              sx={{ cursor: "pointer" }}
              divider
              secondaryAction={<ChangeLastNameModal />}
            >
              <ListItemText primary={"Last Name"} secondary={lastName} />
            </ListItem>
          </List>

          <Box width={1} my={2} display="flex" justifyContent="center">
            <DeleteUser />
          </Box>
        </Box>
      </Box>
    </>
  );
}
