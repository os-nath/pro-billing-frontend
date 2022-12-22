import "../css/Sidebar.css";


import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {Box, List, Divider, IconButton, Toolbar} from "@mui/material";
import { mainListItems, secondaryListItems } from "./listItems.js";



export default function Sidebagr(props) {
  const { onCollapsedToggle, isCollapsed } = props;

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={onCollapsedToggle}>
          <ChevronLeftIcon sx={{ m: 1, color: "#FEDD00", fontWeight: 900 }} />
        </IconButton>
      </Toolbar>

      <List component="nav" sx={{ border: "none" }}>
        {mainListItems}
        <Divider sx={{ my: 1, borderColor: "transparent" }} />
        {secondaryListItems}
      </List>
    </>
  );
}