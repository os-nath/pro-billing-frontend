import * as React from "react";
import "../css/App.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import VideoSettingsOutlinedIcon from "@mui/icons-material/VideoSettingsOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FlareOutlinedIcon from "@mui/icons-material/FlareOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Tasks" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DevicesOtherOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Devices" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AppSettingsAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="TV Apps" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <VideoSettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dynamic content" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <GroupsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Groups" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <NotificationsActiveOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Emergency" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Our values
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <FavoriteOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Amor" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <FlareOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Coragem" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NavigationOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Verdade" />
    </ListItemButton>
  </React.Fragment>
);
