import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MapDropdown from "../components/Game/MapDropdown";
import { gameContext } from "../components/Game/GameContext";
import * as d3 from "d3";
import CharacterDropdown from "../components/Game/CharacterDropdown";

interface Point {
  id: number;
  x: number;
  y: number;
}

let data: Array<Point> = [];
let numPoints = 100;

function updateData() {
  data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({
      id: i,
      x: Math.random() * 500,
      y: Math.random() * 500,
    });
  }
}

export default function Game() {
  // const { chosenMap } = useContext(gameContext);

  useEffect(() => {
    updateData();
    let zoom = d3.zoom().on("zoom", (e: any) => {
      d3.select("#main g").attr("transform", e.transform);
    });

    d3.zoom().on("zoom", (e: any) => {
      d3.select("#main g").attr("transform", e.transform);
    });

    d3.select("#main").call(zoom as any);

    d3.select("#main g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 3);
  }, []);

  return (
    <Box width={1} height={1} overflow="hidden">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: 1,
          height: 1,
          backgroundColor: "rgba(75,21,31, 0.1)",
        }}
      >
        <Grid container columns={4} height={1} width={1} overflow="hidden">
          <Grid item xs={3}>
            <Box
              sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <svg id="main" width="100%" height="100%">
                <g></g>
              </svg>
            </Box>
          </Grid>

          <Grid
            item
            xs={1}
            sx={{
              background: "white",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <MapDropdown />
            <CharacterDropdown />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
