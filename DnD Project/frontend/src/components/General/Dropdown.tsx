import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

interface DropdownProps {
  title: string;
  children: React.ReactElement[] | React.ReactElement;
  subtitle?: string;
  divider?: boolean;
}

export default function Dropdown({
  children,
  title,
  subtitle,
  divider,
}: DropdownProps) {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <List sx={{}}>
        <ListItemButton
          divider={divider}
          onClick={() => setShowList(!showList)}
        >
          <ListItemText primary={title} secondary={subtitle ?? ""} />
          {showList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      </List>
    </>
  );
}
