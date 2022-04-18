import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import MapDropdown from "../components/Game/MapDropdown";
import { gameContext } from "../components/Game/GameContext";
import * as d3 from "d3";
import CharacterDropdown from "../components/Game/CharacterDropdown";

interface Point {
  id: number;
  x: number;
  y: number;
  letter: string;
}

let numPoints = 5;

export default function Game() {
  const [data, setData] = useState<Point[]>([]);
  const { chosenMap } = useContext(gameContext);

  const updateData = useCallback(() => {
    let temp = [];
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < numPoints; i++) {
      const num = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
      temp.push({
        id: i,
        x: Math.random() * 500,
        y: Math.random() * 500,
        letter: letters[num],
      });
    }

    setData(temp);
  }, []);

  useEffect(() => {
    updateData();
  }, [updateData]);

  useEffect(() => {
    let zoom = d3.zoom().on("zoom", (e: any) => {
      // console.log(d3.zoomTransform());
      d3.select("#canvas g").attr("transform", e.transform);
    });

    d3.select("#canvas").call(zoom as any);
    d3.select("#canvas").on("click", (e) => {
      const [x, y] = d3.pointer(e);

      const num = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
      const letters = "abcdefghijklmnopqrstuvwxyz";
      setData([
        ...data,
        {
          id: data.length,
          x,
          y,
          letter: letters[num],
        },
      ]);
    });

    d3.select("#main")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0;");

    d3.select("#canvas g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 5)
      .style("stroke", "rgba(180, 180, 180, 0.8)")
      .on("mouseover", (_, i) => {
        d3.select("#tooltip")
          .transition()
          .duration(200)
          .style("opacity", 1)
          .text(i.letter);
      })
      .on("mouseout", () => {
        d3.select("#tooltip").style("opacity", 0);
      })
      .on("mousemove", (e) => {
        d3.select("#tooltip")
          .style("left", `${e.clientX + 5}px`)
          .style("top", `${e.clientY + 5}px`);
      });
  }, [data, chosenMap]);

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
            <MapDropdown />
            <CharacterDropdown />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
