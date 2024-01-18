import { StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export const CollapsesLineamientos = ({open}) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItemButton>
      </List>
    </Collapse>
  );
};
