import { Box, Button, Grid, Slider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MapDropdown from "../components/Game/MapDropdown";
import { gameContext } from "../components/Game/GameContext";
import * as d3 from "d3";
import CharacterDropdown from "../components/Game/CharacterDropdown";
import { CharList } from "../utils/interfaces";
import SaveGame from "../components/Game/SaveGame";

export default function Game() {
  const { characters, chosenMap, updateChar } = useContext(gameContext);
  const [circleSize, setCircleSize] = useState(5);

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
      .on("mouseover", (_, i) => {
        d3.select("#tooltip")
          .transition()
          .duration(200)
          .style("opacity", 1)
          .text((i as CharList).name);
      })
      .on("mouseout", () => {
        d3.select("#tooltip").style("opacity", 0);
      })
      .on("mousemove", (e) => {
        d3.select("#tooltip")
          .style("left", `${e.clientX + 5}px`)
          .style("top", `${e.clientY + 5}px`);
      });
  }, [characters, chosenMap, circleSize, updateChar]);

  return (
    <Box width={1} height={1} overflow="hidden">
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
        <Grid container columns={4} height={1} width={1} overflow="hidden">
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
            <Box
              sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignContent: "center",
              }}
            >
              <MapDropdown />
              <CharacterDropdown />
              <Box p={3}>
                <Slider
                  onChange={(e, newVal) => {
                    e.preventDefault();
                    setCircleSize(newVal as number);
                  }}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  defaultValue={5}
                  step={1}
                  min={5}
                  max={15}
                  marks
                />
              </Box>

              <SaveGame />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
