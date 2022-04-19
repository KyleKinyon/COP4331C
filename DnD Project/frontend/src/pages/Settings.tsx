import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Add, Delete, Edit } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import req from "../utils/request";

import ChangeUserModal from "../components/Settings/ChangeUserModal";
import ChangePassModal from "../components/Settings/ChangePassModal";
import ChangeFirstNameModal from "../components/Settings/ChangeFirstNameModal";
import ChangeLastNameModal from "../components/Settings/ChangeLastNameModal";

export default function Settings() {
  const navigate = useNavigate();

  function f1() {
    console.log("Do Something Here");
  }
  const [isOpen, setIsOpen] = useState(false);
  //const [chars, setChars] = useState<Character[]>([]);

  /* const getCharData = async () => {
    try {
      const {
        data: { characters },
      } = await req.get("/char/selectCharacter");

      setChars(characters);
    } catch (error) {
      console.log("Issue getting character data");
      console.error(error);
    }
  };

  const deleteChar = async (id: string) => {
    try {
      await req.post("/char/deleteCharacter", { charId: id });
      await getCharData();
    } catch (error) {
      console.log("Issue with deleting character");
      console.error(error);
    }
  };

  useEffect(() => {
    getCharData();
  }, []);
*/
  return (
    <>
      <Box sx={{ width: 1, height: 1 }}>
        <Navbar />

        <Box p={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Account Settings
          </Typography>
          <List>
            {
              <ListItem
                key={"blah"}
                sx={{ cursor: "pointer" }}
                divider
                secondaryAction={
                 <ChangeUserModal />
                  
                }
                
              >
                <ListItemText
                  primary={"Username"}
                  secondary={"~Player's Username Here~"}
                  onClick={() => f1()}
                />
              </ListItem>
            }
            <ListItem
              key={"blah2"}
              sx={{ cursor: "pointer" }}
              divider
              secondaryAction={
                <ChangePassModal />
              }
            >
              <ListItemText
                primary={"Password"}
                secondary={"~Player's Password Here~"}
                onClick={() => f1()}
              />
            </ListItem>

            <ListItem
              key={"blah3"}
              sx={{ cursor: "pointer" }}
              divider
              secondaryAction={
                <ChangeFirstNameModal />
              }
            >
              <ListItemText
                primary={"First Name"}
                secondary={"~Player's First Name Here~"}
                onClick={() => f1()}
              />
            </ListItem>

            <ListItem
              key={"blah4"}
              sx={{ cursor: "pointer" }}
              divider
              secondaryAction={
                 <ChangeLastNameModal />
              }
            >
              <ListItemText
                primary={"Last Name"}
                secondary={"~Player's Last Name Here~"}
                onClick={() => f1()}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
