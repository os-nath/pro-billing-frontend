import "../css/Footer.css";

import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Link, Grid} from "@mui/material";


export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#F1EFF2", p: 2 }}>
      <Grid
        container
        sx={{
          fontSize: "0.8em",
          fontWeight: 700,
          textAlign: "left",
        }}
      >
        <Grid xs={2} xl={2.5}>
          Support
        </Grid>
        <Grid xs={2} xl={2.5}>
          Help
        </Grid>
        <Grid xs={2} xl={2.5}>
          Center
        </Grid>
        <Grid xs={2} xl={2.5}>
          Terms of Service
        </Grid>
        <Grid xs={4} xl={4} sx={{ textAlign: "right" }}>
          <span>
            {"MinhaReactApp"} &copy; {new Date().getFullYear()} {"made in AUS"}
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}
