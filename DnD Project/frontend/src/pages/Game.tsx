import * as d3 from "d3";
import { CharList } from "../utils/interfaces";

import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";

import { useContext, useEffect, useState } from "react";
import { gameContext } from "../components/Game/GameContext";

import MapDropdown from "../components/Game/MapDropdown";
import CharacterDropdown from "../components/Game/CharacterDropdown";
import ListOptions from "../components/Game/ListOptions";
import SaveGame from "../components/Game/SaveGame";

export default function Game() {
  const { characters, chosenMap, updateChar, circleSize } =
    useContext(gameContext);

  useEffect(() => {
    let zoom = d3.zoom().on("zoom", (e: any) => {
      d3.select("#canvas g").attr("transform", e.transform);
    });

    d3.select("#canvas").call(zoom as any);
    d3.select("#canvas g").on("click", (e) => {
      const [x, y] = d3.pointer(e);

      updateChar(x, y);
    });

    d3.select("#main")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0;");

    d3.select("#canvas g")
      .selectAll("circle")
      .data(characters)
      .join("circle")
      .attr("cx", (d) => (d as CharList).x)
      .attr("cy", (d) => (d as CharList).y)
      .attr("r", circleSize)
      .style("fill", (d) => `#${(d as CharList).color}`)
      .style("stroke", "rgba(180, 180, 180, 0.8)")
      .on("mouseover", (_, item) => {
        d3.select("#tooltip")
          .transition()
          .duration(200)
          .style("opacity", 1)
          .text((item as CharList).name);
      })
      .on("mouseout", () => {
        d3.select("#tooltip").style("opacity", 0);
      })
      .on("mousemove", (e) => {
        d3.select("#tooltip")
          .style("left", `${e.clientX + 5}px`)
          .style("top", `${e.clientY + 5}px`);
      });
  }, [characters, circleSize, updateChar]);

  return (
    <Box
      width={1}
      height={1}
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        sx={{
          width: 1,
          height: 1,
          backgroundColor: "rgba(75,21,31, 0.1)",
        }}
      >
        <Grid container columns={4} height={1} width={1}>
          <Grid item xs={3}>
            <Box
              id="main"
              sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <svg id="canvas" width="100%" height="100%">
                <g>
                  <image href={chosenMap.link} x="0" y="0" />
                </g>
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
            <ListOptions />
            <SaveGame />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
