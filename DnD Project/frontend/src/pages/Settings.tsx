import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {  useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import req from "../utils/request";

import ChangeUserModal from "../components/Settings/ChangeUserModal";
import ChangePassModal from "../components/Settings/ChangePassModal";
import ChangeFirstNameModal from "../components/Settings/ChangeFirstNameModal";
import ChangeLastNameModal from "../components/Settings/ChangeLastNameModal";
import { modalContext } from '../components/Settings/ModalContext';

export default function Settings() {
 const {
     username,
     password,
     firstName,
     lastName,
     setUsername,
     setPassword,
     setFirst,
    setLast}= useContext(modalContext);

 /*
const getUser = () =>{
    req.get("user/getUser").then(
        (response)=> {
            setUsername(response.data._id);
        }
    );
};
*/

const getData = async () => {
    try {
      const {data:{data}
    } = await req.get("/user/getUser");

      setUsername(data.username);
      //setPassword(data.password);
      setFirst(data.firstName);
      setLast(data.lastName);
      console.log("The userID was " +data.username);
      console.log("The password was " +data.password);
      console.log("The first name was " +data.firstName);
      console.log("The last name was " +data.lastName);

    } catch (error) {
      console.log("Issue getting username data");
      console.error(error);
    }
  };

  
 

  

  useEffect(() => {
    getData();
  }, []); 

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
                  secondary={username}
                  
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
                secondary={"*********"}
               
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
                secondary={firstName}
                
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
                secondary={lastName}
               
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
