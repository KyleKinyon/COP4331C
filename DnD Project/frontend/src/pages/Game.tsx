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
}

let numPoints = 5;

export default function Game() {
  const [data, setData] = useState<Point[]>([]);
  const { chosenMap } = useContext(gameContext);

  const updateData = useCallback(() => {
    let temp = [];
    for (let i = 0; i < numPoints; i++) {
      temp.push({
        id: i,
        x: Math.random() * 500,
        y: Math.random() * 500,
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
      d3.select("#main g").attr("transform", e.transform);
    });

    d3.select("#main").call(zoom as any);
    d3.select("#main").on("click", (e) => {
      const [x, y] = d3.pointer(e);
      setData([
        ...data,
        {
          id: data.length,
          x,
          y,
        },
      ]);
    });

    // d3.select("#main g").style("background-image", chosenMap.link);

    d3.select("#main g")
      .selectAll("circle")
      .on("mouseover", (e) => {
        console.log(d3.pointer(e));
      })
      .data(data)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 3);
  }, [data, chosenMap]);

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
