import "./css/App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import React, { useCallback } from "react";
import { Box, Card, Grid, MuiDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";


const drawerWidth = "100%";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    border: "none",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    height: "100vh",
    backgroundColor: "transparent",
    ...(!open && {
      overflowX: "hidden",

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const onCollapsedToggle = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <Box style={{ display: "flex", flexFlow: "row nowrap" }}>
      <Drawer variant="permanent" open={!isCollapsed}>
        <Sidebar onCollapsedToggle={onCollapsedToggle} />
      </Drawer>
      <Box>
        <Header />
        <Content />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
