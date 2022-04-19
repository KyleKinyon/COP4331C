import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function ListOptions() {
  return (
    <>
      <List>
        <ListItem
          onClick={() => {}}
          sx={{
            cursor: "pointer",
          }}
          divider
        >
          <ListItemButton>
            <ListItemText primary={"Load Session"} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
